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

const SCROLL_RATE = 0.1

export const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const [scroll, setScroll] = useState(0)
  const contentLength = useRef<number | null>(null)
  const isMobile = useMedia('(max-width: 786px)')

  const style: CSSProperties = useMemo(() => {
    return { transform: `translateX(-${scroll}px)` }
  }, [scroll])

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()
      const width = contentLength.current
      setScroll((prev) => {
        const next = prev + e.deltaY * SCROLL_RATE
        if (next <= 0.0) return 0.0
        else if (width && next >= width) return width
        else return next
      })
    },
    [contentLength],
  )

  const handleResize = useCallback(() => {
    const scrollWidth =
      (document.getElementById('main')?.clientWidth ?? 0) - window.innerWidth

    contentLength.current = scrollWidth
  }, [])

  useEffect(() => {
    if (document) {
      handleResize()

      window.addEventListener('resize', handleResize)
      window.addEventListener('DOMMouseScroll', (e) => e.preventDefault(), {
        passive: false,
      })
      window.addEventListener('wheel', handleWheel, { passive: false })

      return () => {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('DOMMouseScroll', (e) => e.preventDefault())
        window.removeEventListener('wheel', handleWheel)
      }
    } else return
  }, [])

  if (isMobile) {
    return <>{children}</>
  }
  return (
    <div id="horizontal-scroll" className="h-screen" style={style}>
      {children}
    </div>
  )
}

export default HorizontalScroll
