import classNames from 'classnames'

export const Background = () => {
  return (
    <div
      className={classNames(
        'w-screen',
        'h-screen',
        '-z-[1]',
        'bg-primary',
        'fixed',
      )}
    ></div>
  )
}

export default Background
