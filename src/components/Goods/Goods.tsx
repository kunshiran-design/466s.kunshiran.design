import classNames from 'classnames'

const BASE_STYLE = ['py-32', 'px-24', 'border-black', 'bg-white', 'border-4']
const HEADER_STYLE = [
  'text-[24px]',
  'font-black',
  'leading-none',
  'ml-16',
  'relative',
  'inline-block',
  'before:content-[""] before:absolute before:h-24 before:w-8 before:bg-primary before:-left-16',
]

export const Goods = () => {
  return (
    <section id="Goods" className={classNames('py-56', 'desktop:h-screen')}>
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
        GOODS
      </h1>
      <div
        className={classNames(
          'py-48',
          'min-h-full',
          'grid',
          'grid-cols-[auto_min-content_min-content_min-content]',
          'grid-rows-[auto_min-content]',
          'gap-40',
          'items-start',
          'box-border',
        )}
      >
        {/* キャラステッカーセット */}
        <article className={classNames('min-w-[464px] h-full', BASE_STYLE)}>
          <header
            className={classNames(
              'flex',
              'justify-between',
              'font-black',
              'items-center',
            )}
          >
            <h2 className={classNames(HEADER_STYLE)}>キャラステッカーセット</h2>
            <p className={classNames('text-[24px] leading-none')}>
              <span className="text-[0.75em]">¥</span>
              800
            </p>
          </header>
          <div></div>
        </article>

        {/* DM+マルチファイルセット */}
        <article
          className={classNames(
            'min-w-[464px] h-full col-start-2 col-end-4',
            BASE_STYLE,
          )}
        >
          <header
            className={classNames(
              'flex',
              'justify-between',
              'font-black',
              'items-center',
            )}
          >
            <h2 className={classNames(HEADER_STYLE)}>
              DM+マルチファイルセット
            </h2>
            <p className={classNames('text-[24px] leading-none')}>
              <span className="text-[0.75em]">¥</span>
              1000
            </p>
          </header>
          <div></div>
        </article>

        {/* スマホストラップ */}
        <article
          className={classNames(
            'min-w-[464px] h-full col-start-1 col-end-3',
            BASE_STYLE,
          )}
        >
          <header
            className={classNames(
              'flex',
              'justify-between',
              'font-black',
              'items-center',
            )}
          >
            <h2 className={classNames(HEADER_STYLE)}>スマホストラップ</h2>
            <p className={classNames('text-[24px] leading-none')}>
              <span className="text-[0.75em]">¥</span>
              2000
            </p>
          </header>
          <div className={classNames('h-[120px]', 'bg-primary')}></div>
        </article>

        {/* ロゴステッカー */}
        <article
          className={classNames(
            'min-w-[464px] h-full col-start-3 col-end-4',
            BASE_STYLE,
          )}
        >
          <header
            className={classNames(
              'flex',
              'justify-between',
              'font-black',
              'items-center',
            )}
          >
            <h2 className={classNames(HEADER_STYLE)}>ロゴステッカー</h2>
            <p className={classNames('text-[24px] leading-none')}>
              <span className="text-[0.75em]">¥</span>
              200
            </p>
          </header>
          <div></div>
        </article>

        {/* 新刊セット */}
        <article
          className={classNames(
            'min-w-[464px] h-full col-start-4 col-end-5 row-start-1 row-end-3',
            'bg-black',
            'py-32',
            'px-24',
          )}
        >
          <header
            className={classNames(
              'flex',
              'justify-between',
              'font-black',
              'items-center',
            )}
          >
            <h2 className={classNames(HEADER_STYLE, 'text-white')}>
              新刊セット
            </h2>
            <p className={classNames('text-[24px] leading-none', 'text-white')}>
              <span className="text-[0.75em]">¥</span>
              3000
            </p>
          </header>
          <div></div>
        </article>
      </div>
    </section>
  )
}

export default Goods
