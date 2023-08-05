import { useState, useCallback } from 'react'
import classNames from 'classnames'
import { useMeasure, useMedia } from 'react-use'

const MENU_ITEM = [
  { title: 'TOP', href: '/' },
  { title: 'ABOUT', href: '#about' },
  { title: 'INFO', href: '/#information' },
  { title: 'SPECIAL', href: '/#special' },
  { title: 'CREDIT', href: '/#credit' },
]

export const Header = () => {
  const [isExtend, setIsExtend] = useState(true)
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const isMobile = useMedia('(max-width: 1024px)')

  const handleClickExpend = useCallback(() => {
    setIsExtend((prev) => !prev)
  }, [])

  if (isMobile) {
    return (
      <header
        className={classNames(
          'fixed bg-primary w-screen h-64 z-10 px-16 py-8',
          'flex justify-between',
        )}
      >
        <div>logo</div>
        <div>🔹</div>
      </header>
    )
  }

  return (
    <header
      className={classNames(
        'fixed bg-primary h-screen z-10 px-32 pt-64 pb-24',
        'grid grid-rows-[auto_min-content] gap-24',
      )}
    >
      <button
        className={classNames(
          'absolute',
          'top-16',
          'right-[64px]',
          'bg-black',
          'w-24',
          'h-24',
        )}
        onClick={handleClickExpend}
      ></button>
      <div className={classNames('inline-block', 'h-full')}>
        <div
          className={classNames(
            'w-[160px]',
            'bg-black',
            'h-full',
            'inline-block',
          )}
        ></div>
        <div
          className={classNames(
            'h-full',
            'w-[3px]',
            'bg-black',
            'ml-40',
            'transition-all duration-500',
            'inline-block',
            {
              '!w-0 !ml-0': !isExtend,
            },
          )}
        />
        <nav
          className={classNames(
            'relative w-40 transition-all duration-500',
            'inline-block',
            'ml-40',
            {
              '!w-0 ml-0': !isExtend,
            },
          )}
          ref={ref}
        >
          <ul
            className={classNames(
              'absolute',
              'top-1/2',
              'left-1/2',
              '-translate-x-1/2',
              '-translate-y-1/2',
              '-rotate-90',
              'origin-center',
              'flex',
              'justify-between',
              'items-center',
              'pr-4',
            )}
            style={{ height: `${width}px`, width: `${height}px` }}
          >
            <li className={classNames('bg-black', 'h-1/2', 'w-[20%]')}></li>
            {MENU_ITEM.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className={classNames('font-black', 'text-[32px]')}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 場所 */}
      <div
        className={classNames(
          'grid',
          'gap-8',
          'border-4',
          'border-black',
          'bg-white',
          'text-center',
          'row-start-2',
          'px-8',
          'py-16',
          'content-center',
          'h-[160px]',
          'w-full',
        )}
      >
        <div
          className={classNames(
            'text-[10px]',
            'font-black',
            'leading-none',
            'inline-block',
            {
              'text-[16px]': !isExtend,
            },
          )}
        >
          C102_0812_Sat
        </div>
        <div
          className={classNames(
            'text-[10px]',
            'leading-none',
            'font-black',
            'align-text-bottom',
            'inline-block',
            { 'text-[0px]': !isExtend },
          )}
        >
          <span
            className={classNames(
              'text-[0.83em]',
              '-translate-y-[5px]',
              'inline-block',
              { '!text-[0.9em] !translate-y-[-1px]': !isExtend },
            )}
          >
            東
          </span>
          T-13b
        </div>
      </div>
    </header>
  )
}

export default Header
