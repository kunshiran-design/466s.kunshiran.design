import classNames from 'classnames'

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
      className={classNames(
        'w-screen',
        'h-screen',
        'bg-white',
        'px-96',
        'relative',
        'isolate',
      )}
    >
      <div
        className={classNames(
          'absolute',
          'h-[65vh]',
          'aspect-[16/9]',
          'rotate-[-4deg]',
          'bg-white',
          'border-4',
          'border-black',
          'top-[10%]',
          'right-[-2%]',
        )}
      />
      <div
        className={classNames(
          'absolute',
          'text-white',
          'right-[96px]',
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
