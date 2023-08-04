import { useState, useCallback } from 'react'
import classNames from 'classnames'
import { useMeasure } from 'react-use'

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

  const handleClickExpend = useCallback(() => {
    setIsExtend((prev) => !prev)
  }, [])

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
      <div className={classNames('flex', 'gap-24')}>
        <div className={classNames('w-[160px]', 'bg-black', 'h-full')}></div>
        <div
          className={classNames('h-full', 'w-[3px]', 'bg-black', {
            hidden: !isExtend,
          })}
        />
        <nav
          className={classNames('relative w-auto', {
            hidden: !isExtend,
          })}
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
        )}
      >
        <div
          className={classNames(
            'text-[36px]',
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
            'text-[80px]',
            'leading-none',
            'font-black',
            'align-text-bottom',
            'inline-block',
            { 'text-[32px]': !isExtend },
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
