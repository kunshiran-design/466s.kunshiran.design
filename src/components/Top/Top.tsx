import classNames from 'classnames'
import MVImg from '~/assets/images/mv.png'
import SplashImg from '~/assets/images/splash.svg'

const ZABUTON = [
  'relative',
  'isolate',
  'text-white',
  'before:content-[""]',
  'before:absolute',
  'before:inset-y-0',
  'before:left-1/2',
  'before:-translate-x-1/2',
  'before:m-0',
  'before:bg-black',
  'before:h-full',
  'before:w-full',
  'before:px-24',
  'before:z-[-1]',
  'before:box-content',
  'before:clip-path-polygon-[16px_0px,_100%_0px,_calc(100%-16px)_100%,_0_100%]',
]

export const Top = () => {
  return (
    <section
      id="top"
      className={classNames(
        'w-screen',
        'h-screen',
        'px-96',
        'relative',
        'isolate',
        'mobile:px-16',
      )}
    >
      <div
        className={classNames(
          'absolute',
          'horizontal:w-[80vw]',
          'vertical:h-[50vh]',
          'aspect-[16/9]',
          'rotate-[-4deg]',
          'vertical:rotate-[85deg]',
          'border-4',
          'border-black',
          'inset-y-0',
          'my-auto',
          'horizontal:translate-y-[-3%]',
          'horizontal:right-[0%]',
          'vertical:inset-x-0',
          'vertical:mx-auto',
          'vertical:translate-x-[10%]',
          'mobile:!translate-x-[-10%]',
          'mobile:!translate-y-0',
          'overflow-hidden',
        )}
      >
        <img
          src={MVImg}
          alt="466s メインビジュアル"
          className={classNames('w-full h-full object-cover scale-[1.1]')}
        />
      </div>
      <div
        className={classNames(
          'absolute',
          'left-[260px]',
          'bottom-[30px]',
          'm-0',
          'z-[2]',
          'h-[40vh]',
          'aspect-square',
        )}
      >
        <img
          src={SplashImg}
          alt="466s ロゴ"
          className={classNames('w-full h-full object-contain')}
        />
      </div>
      <div
        className={classNames(
          'absolute',
          'text-white',
          'right-[96px]',
          'vertical:right-[32px]',
          'bottom-[114px]',
          'm-0',
          'z-[2]',
          'text-[64px]',
          'text-right',
          'italic',
          'font-black',
        )}
      >
        <span className={classNames(ZABUTON)}>splatoon</span>
        <br />
        <span className={classNames(ZABUTON)}>fashion</span>
        <br />
        <span className={classNames(ZABUTON)}>illustration</span>
        <br />
        <span className={classNames(ZABUTON)}>lookbook</span>
      </div>
      hogehoge
    </section>
  )
}

export default Top
