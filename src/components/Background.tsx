import classNames from 'classnames'
import { useEffect, useRef } from 'react'

export const Background = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = document.getElementsByTagName('section')

    if (!elements) {
      return
    }

    const observer = new IntersectionObserver((entries) => {
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
    })
    Array.from(elements).forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ref])

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
