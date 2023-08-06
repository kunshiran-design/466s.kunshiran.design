import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'

import LogoImg from '~/assets/images/ending-logo.png'

export const Ending = () => {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleInterSection: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true)
        }
      })
    },
    [],
  )

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const observer = new IntersectionObserver(handleInterSection, {
      threshold: 0.5,
    })
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref.current])

  return (
    <section id="ending" className={classNames('desktop:w-[60vw]', 'h-screen')}>
      <div
        className={classNames(
          'grid',
          'gap-16',
          'place-content-center',
          'desktop:w-[10vw]',
          'desktop:h-full',
          'mobile:h-screen',
          'desktop:pl-[15vw]',
        )}
        ref={ref}
      >
        <div
          className={classNames(
            'text-white',
            'text-[32px]',
            'font-bold',
            'opacity-0',
            'transition-all',
            'duration-[1s]',
            'delay-400',
            'text-center',
            'break-keep',
            'whitespace-nowrap',
            {
              'opacity-100': show,
            },
          )}
        >
          WE’RE WAITIG 4 YOU!
        </div>
        <div className="h-32">
          <img
            src={LogoImg}
            alt="466s ロゴ"
            className={classNames(
              'h-full',
              'object-contain',
              'object-contain',
              'mx-auto',
              'opacity-0',
              'transition-all',
              'duration-[1s]',
              'delay-700',
              {
                'opacity-100': show,
              },
            )}
          />
        </div>
      </div>
    </section>
  )
}

export default Ending
