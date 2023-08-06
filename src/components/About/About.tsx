import classNames from 'classnames'

import CoverImg from '~/assets/images/cover.png'

export const About = () => {
  return (
    <section
      id="about"
      className={classNames(
        'py-56',
        'desktop:h-screen',
        'mobile:w-full',
        'desktop:grid',
        'gap-0',
        'grid-cols-[repeat(2,min-content)]',
        'isolate',
        'mobile:mt-64',
      )}
    >
      <div className="z-[1]">
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
          ABOUT
        </h1>
        <div
          className={classNames(
            'desktop:min-w-[464px]',
            'mt-24',
            'desktop:mt-48',
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
            )}
          >
            We’re 466s!
          </h2>
          <p
            className={classNames(
              'mt-24',
              'font-bold',
              'leading-[1.5]',
              'mobile:text-[14px]',
            )}
          >
            スプラトゥーン世界の有名チームをモチーフとした、ファッションイラストレーションルックブック。
            <br /> <br />
            彼女たちは、強いだけでなくモデルとしても有名です。 そんな 466s
            を一冊まるまる特集した初めての雑誌が、466s LOOKBOOK。
            <br /> <br />
            我々は、この本を取り寄せることに成功した。ぜひみなさまにもお手にとっていただきたく、この場を借りて頒布させていただきます。
          </p>
          <div className={classNames('h-4', 'w-[20%]', ' bg-black', 'mt-40')} />
          <p className={classNames('mt-24', 'font-bold', 'text-[14px]')}>
            A fashion illustration lookbook featuring famous teams from the
            Splatoon world. <br /> <br />
            These girls are not only strong but also famous as models. 466s
            LOOKBOOK is the first magazine to feature such 466s in a whole
            issue. We have succeeded in ordering this book. <br /> <br />
            We would like to take this opportunity to distribute it to you.
          </p>
        </div>
      </div>
      <div
        className={classNames(
          'h-[80vh]',
          'self-center',
          'w-[calc(80vh/1.41428)]',
          'mobile:hidden',
        )}
      >
        <div
          className={classNames(
            'w-full',
            'h-full',
            'border-black',
            'border-4',
            'rotate-[10deg]',
            'shadow-[16px_16px_0px_0px_#000]',
          )}
        >
          <img
            src={CoverImg}
            alt="カバー画像"
            className={classNames('object-cover', 'w-full', 'h-full')}
          />
        </div>
      </div>
    </section>
  )
}

export default About
