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
        'fixed bg-primary h-screen z-10 pl-32 pt-64 pb-24',
        'grid grid-rows-[auto_min-content] gap-24',
        'border-r-4 border-black',
      )}
    >
      {/* 開閉ボタン */}
      <button
        className={classNames(
          'absolute',
          'top-16',
          'left-[264px]',
          'bg-black',
          'w-24',
          'h-24',
        )}
        onClick={handleClickExpend}
      ></button>

      {/* コンテンツ */}
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
            'w-0',
            'ml-[28px]',
            'inline-block',
            'box-content',
            'border-r-4 border-black',
            'translate-x-4',
          )}
        />
        <nav
          className={classNames(
            'relative w-40 h-full transition-all duration-500',
            'inline-block',
            'mx-32 overflow-hidden',
            {
              '!w-0 !mx-0': !isExtend,
            },
          )}
          ref={ref}
        >
          <div></div>
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
              'transition-transform duration-500',
              { '!-translate-x-[60%]': !isExtend },
            )}
            style={{ height: `${width}px`, width: `${height}px` }}
          >
            <li className={classNames('bg-black', 'h-full', 'w-[20%]')}></li>
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
      <div className="pr-32">
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
              'text-[22px]',
              'font-black',
              'leading-none',
              'inline-block',
              'transition-[font-size] duration-500',
              {
                '!text-[12px]': !isExtend,
              },
            )}
          >
            C102 08.12（土）東2
          </div>
          <div
            className={classNames(
              'text-[60px]',
              'leading-none',
              'font-black',
              'align-text-bottom',
              'inline-block',
              'transition-all duration-500',
              { '!text-[34px]': !isExtend },
            )}
          >
            <span
              className={classNames(
                'text-[0.83em]',
                '-translate-y-[0.08em]',
                'inline-block',
              )}
            >
              東
            </span>
            T-13b
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
