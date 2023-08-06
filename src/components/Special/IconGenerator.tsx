import * as React from 'react'
import { useCallback, useRef, useState, type ChangeEventHandler } from 'react'
import html2canvas from 'html2canvas'
import classNames from 'classnames'

import Squid from './Squid'
import Octopus from './Octopus'
import IconSquid from '~/assets/images/squid.svg'
import IconOctopus from '~/assets/images/octopus.svg'

export const IconGenerator: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const [iconType, setIconType] = useState('squid')
  const [bgColor, setBgColor] = useState('#ff8000')
  const [hairColor, setHairColor] = useState('#ff8800')
  const [eyeColor, setEyeColor] = useState('#000')

  const handleShare = useCallback(() => {
    void (async () => {
      if (!imageRef.current) {
        return
      }

      if (!window.navigator.share) {
        try {
          const canvas = await html2canvas(imageRef.current, { scale: 2 })
          const dataURI = canvas.toDataURL('image/png')
          const link = document.createElement('a')
          link.download = '466s_generated_icon.png'
          link.href = dataURI
          link.click()
          URL.revokeObjectURL(link.href)
        } catch (_e: unknown) {
          throw new Error('unknown error')
        }
        return
      }

      const canvas = await html2canvas(imageRef.current, { scale: 2 })

      canvas.toBlob((blob) => {
        void (async () => {
          if (!blob) {
            return
          }

          const file = new File([blob], '466s_generated_icon.png', {
            type: 'image/png',
            lastModified: new Date().getTime(),
          })
          await window.navigator.share({ files: [file] })
        })()
      })
    })()
  }, [])

  const handleChangeIconType: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => setIconType(e.target.value), [])

  const handleChangeBgColor: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setBgColor(e.target.value)
    },
    [],
  )

  const handleChangeHairColor: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setHairColor(e.target.value)
    }, [])

  const handleChangeEyeColor: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setEyeColor(e.target.value)
    }, [])

  return (
    <div
      className={classNames(
        'desktop:pr-32',
        'grid',
        'content-between',
        'gap-40',
      )}
    >
      {/* 描画 */}
      <div
        ref={imageRef}
        className={classNames(
          'desktop:w-[40vh] desktop:h-[40vh] mobile:w-full mobile:h-full desktop:shadow-[16px_16px_0px_0px_#000] mobile:shadow-[8px_8px_0px_0px_#000]',
        )}
        style={{ backgroundColor: bgColor }}
      >
        {iconType === 'squid' ? (
          <Squid hairColor={hairColor} eyeColor={eyeColor} />
        ) : (
          <Octopus hairColor={hairColor} eyeColor={eyeColor} />
        )}
      </div>

      <div
        className={classNames(
          'grid',
          'desktop:grid-cols-[repeat(2,auto)]',
          'desktop:gap-80',
          'mobile:gap-24',
          'justify-center',
        )}
      >
        {/* イカ・タコ選択 */}
        <div
          className={classNames('flex', 'desktop:gap-24', 'mobile:gap-[47px]')}
        >
          <h3 className={classNames('font-bold text-[24px]')}>TYPE</h3>
          <div
            className={classNames('grid', 'gap-16', 'content-start', 'mt-8')}
          >
            <label className={classNames('flex gap-8 items-center relative ')}>
              <input
                type="radio"
                value="squid"
                checked={iconType === 'squid'}
                onChange={handleChangeIconType}
                className="hidden"
              />
              <div>
                <div
                  className={classNames(
                    'w-20',
                    'h-20',
                    'border-2',
                    'border-black',
                    'rounded-full',
                    'relative',
                    'bg-white',
                  )}
                >
                  <div
                    className={classNames(
                      'w-12',
                      'h-12',
                      'rounded-full',
                      'box-border',
                      'absolute',
                      'inset-0 m-auto',
                      {
                        'bg-primary': iconType === 'squid',
                      },
                    )}
                  />
                </div>
              </div>
              <img
                className={classNames('h-20', 'w-20', 'object-contain')}
                src={IconSquid}
                alt="squid"
              />
            </label>
            <label className={classNames('flex gap-8 items-center relative')}>
              <input
                type="radio"
                value="octopus"
                checked={iconType === 'octopus'}
                onChange={handleChangeIconType}
                className="hidden"
              />
              <div>
                <div
                  className={classNames(
                    'w-20',
                    'h-20',
                    'border-2',
                    'border-black',
                    'rounded-full',
                    'relative',
                    'bg-white',
                  )}
                >
                  <div
                    className={classNames(
                      'w-12',
                      'h-12',
                      'rounded-full',
                      'box-border',
                      'absolute',
                      'inset-0 m-auto',
                      {
                        'bg-primary': iconType === 'octopus',
                      },
                    )}
                  />
                </div>
              </div>
              <img
                className={classNames('h-20', 'w-20', 'object-contain')}
                src={IconOctopus}
                alt="octopus"
              />
            </label>
          </div>
        </div>

        {/* 色選択 */}
        <div className={classNames('flex', 'gap-24')}>
          <h3 className={classNames('font-bold text-[24px]')}>COLOR</h3>
          <div className={classNames('grid', 'gap-24 content-start', 'mt-8')}>
            <div className={classNames('grid gap-16')}>
              <label className={classNames('flex gap-8 items-center relative')}>
                <input
                  type="color"
                  onChange={handleChangeBgColor}
                  value={bgColor}
                  className={classNames('w-[0]', 'opacity-0', 'absolute')}
                />
                <div
                  className={classNames(
                    'w-20',
                    'h-20',
                    'border-2',
                    'border-black',
                    'rounded-full',
                    'flex',
                    'items-center',
                    'justify-center',
                    'bg-white',
                  )}
                >
                  <div
                    className={classNames('w-12', 'h-12', 'rounded-full')}
                    style={{ backgroundColor: bgColor }}
                  />
                </div>
                <span className={classNames('select-none', 'font-bold')}>
                  BACKGROUND
                </span>
              </label>
              <label className={classNames('flex gap-8 items-center relative')}>
                <input
                  type="color"
                  onChange={handleChangeHairColor}
                  value={hairColor}
                  className={classNames('w-[0]', 'opacity-0', 'absolute')}
                />
                <div
                  className={classNames(
                    'w-20',
                    'h-20',
                    'border-2',
                    'border-black',
                    'rounded-full',
                    'flex',
                    'items-center',
                    'justify-center',
                    'bg-white',
                  )}
                >
                  <div
                    className={classNames('w-12', 'h-12', 'rounded-full')}
                    style={{ backgroundColor: hairColor }}
                  />
                </div>
                <span className={classNames('select-none', 'font-bold')}>
                  TENTACLES
                </span>
              </label>
              <label className={classNames('flex gap-8 items-center relative')}>
                <input
                  type="color"
                  onChange={handleChangeEyeColor}
                  value={eyeColor}
                  className={classNames('w-[0]', 'opacity-0', 'absolute')}
                />
                <div
                  className={classNames(
                    'w-20',
                    'h-20',
                    'border-2',
                    'border-black',
                    'rounded-full',
                    'flex',
                    'items-center',
                    'justify-center',
                    'bg-white',
                  )}
                >
                  <div
                    className={classNames('w-12', 'h-12', 'rounded-full')}
                    style={{ backgroundColor: eyeColor }}
                  />
                </div>
                <span className={classNames('select-none', 'font-bold')}>
                  EYES
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* 保存ボタン */}
      <button
        onClick={handleShare}
        className={classNames(
          'bg-primary text-center text-white py-12 font-bold text-[24px] border-4 border-black w-full',
        )}
      >
        DOWNLOAD
      </button>
    </div>
  )
}

export default IconGenerator
