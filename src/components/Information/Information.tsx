import classNames from 'classnames'

const INFO = [
  { heading: 'Title', text: '466s LOOKBOOOK' },
  { heading: 'Release', text: '2023.08.12' },
  { heading: 'Circle', text: '466s C102 08/12 East T-13b' },
  { heading: 'Book', text: 'A4 16P SaddleStitch(Orange)' },
]

export const Information = () => {
  return (
    <section
      id="Information"
      className={classNames('px-[128px]', 'py-56', 'desktop:h-screen')}
    >
      <h1
        className={classNames(
          'font-black',
          'text-[56px]',
          'leading-none',
          'relative',
          'inline-block',
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
          'py-48',
          'min-h-full',
          'grid',
          'grid-cols-[min-content_auto]',
          'grid-rows-[min-content_auto]',
          'gap-40',
          'items-start',
          'box-border',
        )}
      >
        <div
          className={classNames(
            'min-w-[464px]',
            'py-32',
            'px-24',
            'border-black',
            'bg-white',
            'border-4',
          )}
        >
          <h2
            className={classNames(
              'text-[24px]',
              'font-black',
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
                  className={classNames('font-black text-[14px] leading-none')}
                >
                  {info.heading}
                </h3>
                <p
                  className={classNames(
                    'font-black text-[32px] leading-none break-keep whitespace-nowrap',
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
            'col-start-1',
            'min-w-[464px]',
            'py-32',
            'px-24',
            'border-black',
            'bg-white',
            'border-4',
          )}
        >
          <h2
            className={classNames(
              'text-[24px]',
              'font-black',
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
            <div className={classNames('w-16', 'h-16', 'bg-primary')} />
            <p
              className={classNames(
                'font-black',
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
            'row-start-1',
            'row-end-3',
            'min-w-[640px]',
            'h-full',
            'max-h-[1000px]',
            'py-32',
            'px-24',
            'border-black',
            'bg-white',
            'border-4',
          )}
        >
          <h2
            className={classNames(
              'text-[24px]',
              'font-black',
              'leading-none',
              'ml-16',
              'relative',
              'inline-block',
              'before:content-[""] before:absolute before:h-24 before:w-8 before:bg-primary before:-left-16',
            )}
          >
            MAP
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Information