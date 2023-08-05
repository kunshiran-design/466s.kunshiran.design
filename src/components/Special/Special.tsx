import classNames from 'classnames'
import IconGenerator from './IconGenerator'

export const Special = () => {
  return (
    <section id="Special" className={classNames('py-56', 'desktop:h-screen')}>
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
        SPECIAL
      </h1>
      <div
        className={classNames(
          'min-w-[464px]',
          'py-48',
          'min-h-full',
          'box-border',
          'grid',
        )}
      >
        <div
          className={classNames(
            'py-32',
            'pl-48',
            'pr-40',
            'h-full',
            'border-black',
            'bg-white',
            'border-4',
            'grid',
            'grid-cols-[repeat(3,min-content)]',
            'gap-24',
          )}
        >
          <IconGenerator />
          <div className={classNames('w-4', 'h-full', 'bg-black')} />
          <div className={classNames('grid', 'gap-16', 'content-start')}>
            <h2
              className={classNames(
                'font-black',
                'text-[56px]',
                'leading-none',
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
            <p
              className={classNames(
                'font-bold',
                'break-keep',
                'whitespace-nowrap',
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
