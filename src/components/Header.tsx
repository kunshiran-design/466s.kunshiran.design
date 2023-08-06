import { useState, useCallback, useEffect } from 'react'
import classNames from 'classnames'
import { useMeasure, useMedia } from 'react-use'

import LogoImg from '~/assets/images/logo.svg'
import TextImg from '~/assets/images/text.svg'
import CodeImg from '~/assets/images/code.svg'

import SpLogoImg from '~/assets/images/logo_long.svg'

const MENU_ITEM = [
  { title: 'TOP', href: '/', id: 'top' },
  { title: 'ABOUT', href: '#about', id: 'about' },
  { title: 'INFO', href: '/#information', id: 'information' },
  { title: 'GOODS', href: '/#goods', id: 'goods' },
  { title: 'SPECIAL', href: '/#special', id: 'special' },
  { title: 'CREDIT', href: '/#credit', id: 'credit' },
]

export const Header = () => {
  const [isExtend, setIsExtend] = useState(false)
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const [heightRef, { height: boxHeight }] = useMeasure<HTMLElement>()
  const isMobile = useMedia('(max-width: 1024px)')

  const handleClick = useCallback(
    (id: string) => {
      if (isMobile) {
        return
      }

      if (id === 'top') {
        history.pushState(null, '', window.location.pathname)
      } else {
        history.pushState(null, '', `${window.location.pathname}#${id}`)
      }

      window.dispatchEvent(
        new CustomEvent('clickMenu', {
          detail: { id },
        }),
      )
    },
    [isMobile],
  )

  useEffect(() => {
    setIsExtend(false)
  }, [isMobile])

  const handleClickExpend = useCallback(() => {
    setIsExtend((prev) => !prev)
  }, [])

  if (isMobile) {
    return (
      <header
        className={classNames(
          'fixed bg-primary w-screen h-64 z-[12] px-16 py-8',
          'flex justify-between',
        )}
      >
        <div className={classNames('h-full', 'py-4')}>
          <img src={SpLogoImg} className="h-full" />
        </div>
        <button
          className={classNames(
            'grid gap-8 justify-end justify-items-end w-48 py-12',
          )}
          onClick={handleClickExpend}
        >
          <div className={classNames('h-2 w-48 bg-black')} />
          <div className={classNames('h-2 w-40 bg-black')} />
          <div className={classNames('h-2 w-32 bg-black')} />
        </button>
        <nav
          className={classNames(
            'absolute h-[calc(100vh-64px)] w-screen inset-x-0 mx-auto top-64 bg-primary z-[11]',
            'grid gap-8 content-between',
            'pt-32 pb-16',
            'translate-x-full',
            'transition-transform duration-500',
            {
              '!translate-x-0': isExtend,
            },
          )}
        >
          <ul
            className={classNames(
              'h-full',
              'w-full',
              'px-16',
              'grid',
              'gap-32',
              'content-start',
              'leading-none',
            )}
          >
            {MENU_ITEM.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className={classNames('font-bold', 'text-[40px]')}
                  onClick={() => handleClickExpend()}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={classNames(
              'grid',
              'gap-48',
              'grid-cols-[1fr_1fr]',
              'px-16',
              'items-end',
            )}
          >
            <div>
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
                  'h-[120px]',
                  'w-full',
                )}
              >
                <div
                  className={classNames(
                    'text-[16px]',
                    'font-bold',
                    'leading-none',
                    'inline-block',
                    'transition-[font-size] duration-500',
                  )}
                >
                  C102 08.12（土）東2
                </div>
                <div
                  className={classNames(
                    'text-[48px]',
                    'leading-none',
                    'font-bold',
                    'align-text-bottom',
                    'inline-block',
                    'transition-all duration-500',
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
            <div className="w-full">
              <img src={CodeImg} alt="バーコード" className="w-full" />
            </div>
          </div>
        </nav>
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
      ref={heightRef}
    >
      {/* 開閉ボタン */}
      <button
        className={classNames(
          'absolute',
          'top-16',
          'left-[260px]',
          'text-black',
          'w-24',
          'h-24',
          'rotate-180',
          {
            '!rotate-0': !isExtend,
          },
        )}
        onClick={handleClickExpend}
      >
        ≫
      </button>

      {/* コンテンツ */}
      <div
        className={classNames('inline-block', 'h-full', 'flex', 'items-start')}
      >
        {/* ロゴ・テキスト */}
        <div
          className={classNames(
            'w-[160px]',
            'h-full',
            'inline-grid',
            'gap-32',
            'content-start',
          )}
        >
          <img src={LogoImg} alt="466s ロゴ" />
          <div
            className={classNames('h-2', 'w-full', 'bg-black', {
              hidden: boxHeight < 1020,
            })}
          />
          <img
            className={classNames('pl-1', { hidden: boxHeight < 1020 })}
            src={TextImg}
            alt="466sについて"
          />
        </div>
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
            'relative w-[32px] h-full transition-[width,_margin] duration-500',
            'inline-block',
            'mx-32 overflow-hidden',
            {
              '!w-0 !mx-0': !isExtend,
            },
          )}
          ref={ref}
        >
          <div
            className={classNames(
              'absolute',
              'top-1/2',
              'left-1/2',
              '-translate-x-1/2',
              '-translate-y-1/2',
              '-rotate-90',
              'origin-center',
              'pr-4',
              'transition-transform duration-500',
              '@container',
              { '!-translate-x-[60%]': !isExtend },
            )}
            style={{ height: `${width}px`, width: `${height}px` }}
          >
            <ul
              className={classNames(
                'h-full',
                'w-full',
                'flex',
                '@[640px]:!justify-between',
                'justify-end',
                'items-center',
              )}
            >
              <li className={classNames('h-full', '@[640px]:!block', 'hidden')}>
                <img src={CodeImg} alt="バーコード" />
              </li>
              <div className={classNames('flex justify-end gap-16')}>
                {MENU_ITEM.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className={classNames('font-bold', 'text-[20px]')}
                      onClick={(e) => {
                        e.preventDefault()
                        handleClick(item.id)
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          </div>
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
            'h-[120px]',
            'w-full',
          )}
        >
          <div
            className={classNames(
              'text-[22px]',
              'font-bold',
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
              'font-bold',
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
