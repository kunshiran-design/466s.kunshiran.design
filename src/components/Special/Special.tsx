import classNames from 'classnames'
import IconGenerator from './IconGenerator'

export const Special = () => {
  return (
    <section id="special" className={classNames('py-56', 'desktop:h-screen')}>
      <h1
        className={classNames(
          'font-black',
          'mobile:text-[32px]',
          'desktop:text-[56px]',
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
        SPECIAL
      </h1>
      <div
        className={classNames(
          'desktop:min-w-[464px]',
          'mobile:mt-24',
          'desktop:py-48',
          'min-h-full',
          'box-border',
          'grid',
        )}
      >
        <div
          className={classNames(
            'p-16',
            'desktop:py-32',
            'desktop:pl-48',
            'desktop:pr-40',
            'h-full',
            'mobile:w-full',
            'border-black',
            'bg-white',
            'border-4',
            'grid',
            'desktop:grid-cols-[repeat(3,min-content)]',
            'gap-24',
          )}
        >
          <IconGenerator />
          <div
            className={classNames(
              'desktop:w-4',
              'desktop:h-full',
              'mobile:h-4',
              'mobile:w-full',
              'bg-black',
              'mobile:-order-1',
            )}
          />
          <div
            className={classNames(
              'grid',
              'gap-16',
              'content-start',
              'mobile:-order-2',
            )}
          >
            <h2
              className={classNames(
                'font-bold',
                'text-[56px]',
                'leading-none',
                'mobile:hidden',
              )}
            >
              FREE
              <br />
              ICON
              <br />
              GENE-
              <br />
              RATOR
              <br />
            </h2>
            <h2
              className={classNames(
                'font-bold',
                'text-[40px]',
                'leading-none',
                'desktop:hidden',
              )}
            >
              FREE ICON
              <br />
              GENERATOR
            </h2>
            <p
              className={classNames(
                'font-bold',
                'break-keep',
                'whitespace-nowrap',
                'mobile:text-[14px]',
              )}
            >
              フリーアイコンジェネレータです。
              <br />
              ご自由にお使いいただけますが、
              <wbr />
              以下の注意事項をお守りください。
            </p>
            <ul className={classNames('font-bold', 'list-disc', 'list-inside')}>
              <li>商用利用の禁止</li>
              <li>公式・自作発言の禁止</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Special
