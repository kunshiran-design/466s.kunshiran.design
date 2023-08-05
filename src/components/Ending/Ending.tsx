import classNames from 'classnames'

export const Ending = () => {
  return (
    <section
      className={classNames(
        'w-screen',
        'h-screen',
        'bg-black',
        'flex',
        'place-content-center',
        'pl-[228px]',
      )}
    >
      <div className={classNames('grid', 'gap-8', 'place-content-center')}>
        <div className={classNames('text-white', 'text-[32px]', 'font-black')}>
          WE’RE WAITIG 4 YOU!
        </div>
        <div className="h-64"></div>
      </div>
    </section>
  )
}

export default Ending
