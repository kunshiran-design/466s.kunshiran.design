import classNames from 'classnames'

export const About = () => {
  return (
    <section
      id="about"
      className={classNames(
        'py-56',
        'desktop:h-screen',
        'grid',
        'gap-0',
        'grid-cols-[repeat(2,min-content)]',
        'isolate',
      )}
    >
      <div className="z-[1]">
        <h1
          className={classNames(
            'inline-block',
            'font-black',
            'text-[56px]',
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
            'min-w-[464px]',
            'mt-48',
            'py-32',
            'px-24',
            'border-black',
            'bg-white',
            'border-4',
          )}
        >
          <h2 className={classNames('text-[32px]', 'font-black')}>
            We’re 466s!
          </h2>
          <p className={classNames('mt-24', 'font-bold', 'leading-[1.5]')}>
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
        )}
      >
        <div
          className={classNames(
            'bg-black',
            'w-full',
            'h-full',
            'rotate-[10deg]',
          )}
        ></div>
      </div>
    </section>
  )
}

export default About
