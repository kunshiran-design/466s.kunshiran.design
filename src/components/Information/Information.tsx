import classNames from 'classnames'

import BOOTHLogoImg from '~/assets/images/booth.svg'
import MapImg from '~/assets/images/map.png'

const INFO = [
  { heading: 'Title', text: '466s LOOKBOOOK' },
  { heading: 'Release', text: '2023.08.12' },
  { heading: 'Circle', text: '466s C102 08/12 East T-13b' },
  { heading: 'Book', text: 'A4 16P SaddleStitch(Orange)' },
  { heading: 'Price', text: '¥1500' },
]

export const Information = () => {
  return (
    <section
      id="information"
      className={classNames('py-56', 'desktop:h-screen')}
    >
      <h1
        className={classNames(
          'inline-block',
          'font-black',
          'mobile:text-[32px]',
          'desktop:text-[56px]',
          'leading-none',
          'relative',
          'before:content-[""]',
          'before:absolute',
          'before:inset-s-0',
          'before:-bottom-2',
          'before:bg-black',
          'before:w-full',
          'before:h-4',
        )}
      >
        INFORMATION
      </h1>
      <div
        className={classNames(
          'desktop:py-48',
          'min-h-full',
          'desktop:grid',
          'grid-cols-[min-content_min-content]',
          'grid-rows-[min-content_min-content_auto]',
          'gap-40',
          'content-start',
          'items-start',
          'box-border',
        )}
      >
        <div
          className={classNames(
            'desktop:min-w-[464px]',
            'mobile:mt-24',
            'p-16',
            'desktop:py-32',
            'desktop:px-24',
            'border-black',
            'bg-white',
            'border-4',
          )}
        >
          <h2
            className={classNames(
              'text-[24px]',
              'desktop:text-[32px]',
              'font-bold',
              'leading-none',
              'ml-16',
              'relative',
              'inline-block',
              'before:content-[""] before:absolute before:h-24 before:w-8 before:bg-primary before:-left-16',
            )}
          >
            OVERVIEW
          </h2>
          <ul className={classNames('grid', 'gap-16', 'mt-24')}>
            {INFO.map((info) => (
              <li key={info.heading} className={classNames('grid', 'gap-8')}>
                <h3
                  className={classNames('font-bold text-[14px] leading-none')}
                >
                  {info.heading}
                </h3>
                <p
                  className={classNames(
                    'font-bold text-[20px] desktop:text-[32px] leading-none break-keep whitespace-nowrap',
                  )}
                >
                  {info.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={classNames(
            'desktop:min-w-[464px]',
            'mobile:mt-24',
            'p-16',
            'desktop:py-32',
            'desktop:px-24',
            'border-black',
            'bg-white',
            'border-4',
          )}
        >
          <h2
            className={classNames(
              'text-[24px]',
              'desktop:text-[32px]',
              'font-bold',
              'leading-none',
              'ml-16',
              'relative',
              'inline-block',
              'before:content-[""] before:absolute before:h-24 before:w-8 before:bg-primary before:-left-16',
            )}
          >
            SHOP
          </h2>
          <a
            href="https://kunshiran-design.booth.pm/"
            target="_blank"
            rel="noreferrer"
            className={classNames(
              'mt-24',
              'flex',
              'gap-8',
              'items-center',
              'group',
            )}
          >
            <div className={classNames('w-16', 'h-16', 'bg-primary', 'p-2')}>
              <img src={BOOTHLogoImg} alt="BOOTH ロゴ" />
            </div>
            <p
              className={classNames(
                'font-bold',
                'relative',
                'before:content-[""] before:absolute before:w-0 before:h-2 before:bottom-[0] before:left-[0] before:bg-black before:transition-[width]',
                'group-hover:before:w-full',
              )}
            >
              kunshiran design
            </p>
          </a>
        </div>
        <div
          className={classNames(
            'col-start-2',
            'col-end-3',
            'row-start-1',
            'row-end-4',
            'mobile:mt-24',
            'h-full',
            'p-16',
            'desktop:py-32',
            'desktop:px-24',
            'border-black',
            'bg-white',
            'border-4',
          )}
        >
          <h2
            className={classNames(
              'text-[24px]',
              'desktop:text-[32px]',
              'font-bold',
              'leading-none',
              'ml-16',
              'relative',
              'inline-block',
              'before:content-[""] before:absolute before:h-24 before:w-8 before:bg-primary before:-left-16',
            )}
          >
            MAP
          </h2>
          <div
            className={classNames(
              'desktop:h-full',
              'mobile:w-full',
              'aspect-[9/12]',
              'pt-24',
              'desktop:pr-24',
              'desktop:pb-32',
              'relative',
            )}
          >
            <img
              src={MapImg}
              alt="コミケサークル配置マップ"
              className={classNames('h-full', 'w-full')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
