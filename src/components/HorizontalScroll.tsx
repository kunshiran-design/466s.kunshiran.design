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

interface HorizontalScrollProps {
  children: ReactNode
}

const SCROLL_RATE = 0.1

export const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const [scroll, setScroll] = useState(0)
  const contentLength = useRef<number | null>(null)

  const style: CSSProperties = useMemo(() => {
    return { transform: `translateX(-${scroll}px)` }
  }, [scroll])

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()
      const width = contentLength.current
      setScroll((prev) => {
        console.log(prev, width)
        const next = prev + e.deltaY * SCROLL_RATE
        if (next <= 0.0) return 0.0
        else if (width && next >= width) return width
        else return next
      })
    },
    [contentLength],
  )

  const handleResize = useCallback(() => {
    contentLength.current =
      document.getElementById('horizontal-scroll')?.clientWidth ?? 0
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

  return (
    <div
      id="horizontal-scroll"
      className={classNames('h-screen w-[300vw]')}
      style={style}
    >
      {children}
    </div>
  )
}

export default HorizontalScroll
