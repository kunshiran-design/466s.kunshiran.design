import * as React from 'react'
import { useCallback, useRef, useState, type ChangeEventHandler } from 'react'
import html2canvas from 'html2canvas'
import classNames from 'classnames'

import Squid from './Squid'
import Octopus from './Octopus'

export const IconGenerator: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const [iconType, setIconType] = useState('squid')
  const [bgColor, setBgColor] = useState('#da62c4')
  const [hairColor, setHairColor] = useState('#13e0d5')
  const [eyeColor, setEyeColor] = useState('#74dc25')
  const handleGenerate = useCallback(() => {
    void (async () => {
      if (!imageRef.current) {
        return
      }

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
    <div>
      {/* イカ・タコ選択 */}
      <div className={classNames('')}>
        <label>
          <input
            type="radio"
            value="squid"
            checked={iconType === 'squid'}
            onChange={handleChangeIconType}
          />
          <span>イカ🦑</span>
        </label>
        <label>
          <input
            type="radio"
            value="octopus"
            checked={iconType === 'octopus'}
            onChange={handleChangeIconType}
          />
          <span>タコ🐙</span>
        </label>
      </div>

      {/* 色選択 */}
      <div>
        <label>
          <input type="color" value={bgColor} onChange={handleChangeBgColor} />
          <span>背景色</span>
        </label>
        <label>
          <input
            className={classNames(
              'appearance-none bg-transparent w-[100px] h-[100px] border-none cursor-pointer rounded-[50%]',
              '[&::--webkit-color-swatch]:rounded-[50%]',
              '[&::--moz-color-swatch]:rounded-[50%]',
            )}
            type="color"
            value={hairColor}
            onChange={handleChangeHairColor}
          />
          <span>ゲソ色</span>
        </label>
        <label>
          <input
            type="color"
            value={eyeColor}
            onChange={handleChangeEyeColor}
          />
          <span>目の色</span>
        </label>
      </div>

      {/* 描画 */}
      <div
        ref={imageRef}
        className={classNames('w-[140px] h-[140px]')}
        style={{ backgroundColor: bgColor }}
      >
        {iconType === 'squid' ? (
          <Squid hairColor={hairColor} eyeColor={eyeColor} />
        ) : (
          <Octopus hairColor={hairColor} eyeColor={eyeColor} />
        )}
      </div>

      {/* 保存ボタン */}
      <button
        onClick={handleGenerate}
        className={classNames(
          'bg-primary px-16 py-4 font-bold tracking-[0.1em] border-2 border-black',
        )}
      >
        保存する
      </button>
    </div>
  )
}

export default IconGenerator
