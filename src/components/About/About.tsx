import classNames from 'classnames'

export const About = () => {
  return (
    <section
      id="about"
      className={classNames('px-[128px]', 'desktop:h-screen')}
    >
      <h1
        className={classNames(
          'font-black',
          'text-[56px]',
          'leading-none',
          'relative',
          'before:content-[""]',
          'before:absolute',
          'before:inset-s-0',
          'before:mb-2',
          'before:bg-black',
          'before:w-full',
          'before:h-2',
        )}
      >
        ABOUT
      </h1>
    </section>
  )
}

export default About
