import classNames from 'classnames'

const BOOK = [
  { heading: '主催 / 企画', members: [{ name: 'にお', link: 'nioin_design' }] },
  {
    heading: 'ロゴ・グラフィック・編集・書体デザイン',
    members: [{ name: 'cilvia', link: 'cilvia333' }],
  },
  {
    heading: '表紙・本文イラスト',
    members: [
      { name: '真野怜', link: 'mano_rei_' },
      { name: 'くろろん', link: '_kuro_ron_' },
    ],
  },
  {
    heading: '本文イラスト',
    members: [
      { name: 'にお', link: 'nioin_design' },
      { name: 'エイム', link: 'A_1_M_i' },
    ],
  },
  {
    heading: 'SPECIAL THANKS',
    members: [{ name: '東雲ねむ', link: 'nemulog_sn' }],
  },
]

const OTHERS = [
  {
    heading: 'グッズデザイン',
    members: [{ name: 'にお', link: 'nioin_design' }],
  },
  {
    heading: 'ウェブデザイン・実装',
    members: [{ name: 'cilvia', link: 'cilvia333' }],
  },
  {
    heading: 'PV映像・音楽',
    members: [{ name: '緒河秋', link: 'mamedenkun' }],
  },
  {
    heading: 'お品書き・マップデザイン',
    members: [{ name: 'エイム', link: 'A_1_M_i' }],
  },
]

export const Credit = () => {
  return (
    <section id="credit" className={classNames('py-56', 'desktop:h-screen')}>
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
        CREDIT
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
            BOOK
          </h2>
          <ul className={classNames('grid', 'gap-48', 'mt-24')}>
            {BOOK.map((info) => (
              <li key={info.heading} className={classNames('grid', 'gap-12')}>
                <h3
                  className={classNames('font-bold text-[14px] leading-none')}
                >
                  {info.heading}
                </h3>
                <ul className={classNames('grid gap-16')}>
                  {info.members.map((member) => (
                    <li key={member.link}>
                      <p
                        className={classNames(
                          'font-bold text-[32px] leading-none break-keep whitespace-nowrap',
                        )}
                      >
                        {member.name}（
                        <a
                          href={`https://twitter.com/${member.link}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {`@${member.link}`}
                        </a>
                        ）
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
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
            OTEHRS
          </h2>
          <ul className={classNames('grid', 'gap-48', 'mt-24')}>
            {OTHERS.map((info) => (
              <li key={info.heading} className={classNames('grid', 'gap-12')}>
                <h3
                  className={classNames('font-bold text-[14px] leading-none')}
                >
                  {info.heading}
                </h3>
                <ul className={classNames('grid gap-16')}>
                  {info.members.map((member) => (
                    <li key={member.link}>
                      <p
                        className={classNames(
                          'font-bold text-[32px] leading-none break-keep whitespace-nowrap',
                        )}
                      >
                        {member.name}（
                        <a
                          href={`https://twitter.com/${member.link}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {`@${member.link}`}
                        </a>
                        ）
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Credit
