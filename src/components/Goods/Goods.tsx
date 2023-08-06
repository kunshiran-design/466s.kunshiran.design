import classNames from 'classnames'

import CharaStickerImg from '~/assets/images/chara.png'
import DmImg from '~/assets/images/dm.png'
import StrapImg from '~/assets/images/strap.png'
import StickerImg from '~/assets/images/sticker.png'
import SetImg from '~/assets/images/set.png'

const BASE_STYLE = [
  'py-32',
  'px-24',
  'border-black',
  'bg-white',
  'border-4',
  'box-border',
  'grid',
  'gap-24',
  'items-start',
  'grid-rows-[min-content_1fr]',
]
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
    <section id="goods" className={classNames('py-56', 'desktop:h-screen')}>
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
          'h-full',
          'py-48',
          'grid',
          'grid-cols-[max-content_min-content_auto_auto]',
          'grid-rows-[1fr_min-content]',
          'gap-40',
          'items-start',
          'box-border',
        )}
      >
        {/* キャラステッカーセット */}
        <article className={classNames('h-full', BASE_STYLE)}>
          <header
            className={classNames(
              'flex',
              'justify-between',
              'gap-16',
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
          <div className={classNames('h-full', 'relative')}>
            <img
              src={CharaStickerImg}
              className={classNames(
                'h-full',
                'w-full',
                'absolute',
                'inset-0',
                'm-auto',
                'object-contain',
              )}
            />
          </div>
        </article>

        {/* DM+マルチファイルセット */}
        <article
          className={classNames('h-full', 'col-start-2 col-end-4', BASE_STYLE)}
        >
          <header
            className={classNames(
              'flex',
              'justify-between',
              'font-black',
              'items-center',
              'gap-16',
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
          <div className={classNames('h-full', 'relative')}>
            <img
              src={DmImg}
              className={classNames(
                'h-full',
                'w-full',
                'absolute',
                'inset-0',
                'm-auto',
                'object-contain',
              )}
            />
          </div>
        </article>
        {/* スマホストラップ */}
        <article
          className={classNames(
            'min-w-[464px] h-full',
            'col-start-1 col-end-3',
            'row-start-2',
            'row-end-3',
            BASE_STYLE,
          )}
        >
          <header
            className={classNames(
              'flex',
              'justify-between',
              'font-black',
              'items-center',
              'gap-16',
            )}
          >
            <h2 className={classNames(HEADER_STYLE)}>スマホストラップ</h2>
            <p className={classNames('text-[24px] leading-none')}>
              <span className="text-[0.75em]">¥</span>
              2000
            </p>
          </header>
          <div className={classNames('h-[7vh] aspect-[685/108]', 'relative')}>
            <img
              src={StrapImg}
              className={classNames(
                'h-full',
                'w-full',
                'absolute',
                'inset-0',
                'm-auto',
                'object-contain',
              )}
            />
          </div>
        </article>

        {/* ロゴステッカー */}
        <article className={classNames('min-w-[464px] h-full', BASE_STYLE)}>
          <header
            className={classNames(
              'flex',
              'justify-between',
              'font-black',
              'items-center',
              'gap-16',
            )}
          >
            <h2 className={classNames(HEADER_STYLE)}>ロゴステッカー</h2>
            <p className={classNames('text-[24px] leading-none')}>
              <span className="text-[0.75em]">¥</span>
              200
            </p>
          </header>
          <div className={classNames('h-[7vh]', 'relative')}>
            <img
              src={StickerImg}
              className={classNames(
                'h-full',
                'w-full',
                'absolute',
                'inset-0',
                'm-auto',
                'object-contain',
              )}
            />
          </div>
        </article>
        {/* 新刊セット */}
        <article
          className={classNames(
            'min-w-[464px] ',
            'h-full',
            'bg-black',
            'py-32',
            'px-24',
            'box-border',
            'grid',
            'gap-24',
            'items-start',
            'grid-rows-[min-content_1fr]',
            'col-start-4',
            'col-end-5',
            'row-start-1',
            'row-end-3',
          )}
        >
          <header
            className={classNames(
              'flex',
              'justify-between',
              'font-black',
              'items-center',
              'gap-16',
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
          <div className={classNames('h-full', 'relative')}>
            <img
              src={SetImg}
              className={classNames(
                'h-full',
                'w-full',
                'absolute',
                'inset-0',
                'm-auto',
                'object-contain',
                'object-top',
              )}
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Goods
