import {
  useState,
  type ReactNode,
  useEffect,
  useMemo,
  type CSSProperties,
  useCallback,
  useRef,
} from 'react'
import classNames from 'classnames'
import { useMedia } from 'react-use'

interface HorizontalScrollProps {
  children: ReactNode
}

const SCROLL_RATE = 0.4

export const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const scroll = useRef<number>(0)
  const contentLength = useRef<number | null>(null)
  const isMobile = useMedia('(max-width: 1024px)')

  const handleSetScroll = useCallback(
    (val: number) => {
      const el = document.getElementById('horizontal-scroll')

      if (!el) {
        return
      }

      scroll.current = val
      el.style.transform = `translateX(-${val}px)`
    },
    [scroll.current],
  )

  /**
   * マウスホイールでスクロールさせる
   */
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()
      handleSetScroll(calcScroll(scroll.current + e.deltaY * SCROLL_RATE))
    },
    [contentLength, scroll.current],
  )

  /**
   * スクロール量の計算
   */
  const calcScroll = useCallback(
    (next: number) => {
      const width = contentLength.current

      if (!width) {
        return 0.0
      }

      if (next <= 0.0) return 0.0
      else if (width && next >= width) return width
      else return next
    },
    [contentLength],
  )

  const handleResize = useCallback(() => {
    const scrollWidth =
      (document.getElementById('main')?.clientWidth ?? 0) - window.innerWidth

    contentLength.current = scrollWidth
  }, [])

  const handleClickMenu = useCallback((id: string) => {
    const width = contentLength.current
    const el = document.getElementById(id)
    const offsetLeft = el?.offsetLeft ?? null

    if (offsetLeft === null || width === null) {
      return
    }

    const position = offsetLeft

    handleSetScroll(calcScroll(position - 400))
  }, [])

  useEffect(() => {
    if (isMobile) {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('DOMMouseScroll', (e) => e.preventDefault())
      window.removeEventListener('wheel', handleWheel)
      return
    }

    if (document) {
      handleResize()

      if (window.location.hash) {
        const id = window.location.hash.split('#')[1]
        handleClickMenu(id ?? 'top')
      }

      window.addEventListener('resize', handleResize)
      window.addEventListener('DOMMouseScroll', (e) => e.preventDefault(), {
        passive: false,
      })
      window.addEventListener('wheel', handleWheel, { passive: false })
      window.addEventListener('clickMenu', (e) => {
        handleClickMenu(e.detail.id)
      })
      window.addEventListener(
        'hashchange',
        (e) => {
          const id = e.newURL.split('#')[1]
          handleClickMenu(id ?? 'top')
        },
        false,
      )

      return () => {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('DOMMouseScroll', (e) => e.preventDefault())
        window.removeEventListener('wheel', handleWheel)
      }
    } else return
  }, [isMobile])

  if (isMobile) {
    return <>{children}</>
  }
  return (
    <div id="horizontal-scroll" className={classNames('h-screen', 'w-full')}>
      {children}
    </div>
  )
}

export default HorizontalScroll

declare global {
  interface WindowEventMap {
    clickMenu: CustomEvent<{ id: string }>
  }
}
