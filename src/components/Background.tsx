import classNames from 'classnames'
import { useCallback, useEffect, useRef } from 'react'

export const Background = () => {
  const ref = useRef<HTMLDivElement>(null)

  const handleObserve = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!ref?.current) {
            return
          }
          switch (entry.target.id) {
            case 'top':
              ref.current.style.backgroundColor = '#ffffff'
              break
            case 'ending':
              ref.current.style.backgroundColor = '#000000'
              break
            default:
              ref.current.style.backgroundColor = '#ff8000'
          }
        }
      })
    },
    [ref],
  )

  const sleep = (msec: number) =>
    new Promise((resolve) => setTimeout(resolve, msec))

  const handleOnLoad = useCallback(() => {
    const elements = document.getElementsByTagName('section')

    if (!elements) {
      return
    }

    const observer = new IntersectionObserver(handleObserve)
    Array.from(elements).forEach((el) => {
      observer.observe(el)
    })
  }, [ref, document])

  useEffect(() => {
    void (async () => {
      await sleep(10)
      handleOnLoad()
    })()
  }, [ref, document])

  return (
    <div
      className={classNames(
        'w-screen',
        'h-screen',
        '-z-[1]',
        'fixed',
        'transition-colors',
        'duration-500',
      )}
      ref={ref}
    ></div>
  )
}

export default Background
