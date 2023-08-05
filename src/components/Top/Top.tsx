import classNames from 'classnames'

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
          'bg-black',
          'text-white',
          'right-[96px]',
          'bottom-[114px]',
          'm-0',
          'z-[2]',
          'text-[64px]',
          'text-right',
          'italic',
        )}
      >
        splatoon
        <br />
        fashion
        <br />
        illustration
        <br />
        lookbook
      </div>
      hogehoge
    </section>
  )
}

export default Top
