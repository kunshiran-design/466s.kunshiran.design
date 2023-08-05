import * as React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import {
  ChromePicker,
  CirclePicker,
  type ColorChangeHandler,
} from 'react-color'
import classNames from 'classnames'

const DEFAULT_COLORS = ['#fff', '#000']

export interface ColorPickerProps {
  defaultValue?: string
  onChange: (value: string) => void
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  defaultValue = '#fff',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState(defaultValue)
  const handleOnChange: ColorChangeHandler = useCallback(
    (color, _event) => {
      setIsOpen(false)
      setColor(color.hex)
      onChange(color.hex)
    },
    [onChange],
  )

  return (
    <div>
      <div className={classNames('flex gap-[16px]')}>
        <div
          className={classNames(
            'w-[32px] h-[32px] rounded-[4px] border-2 border-black cursor-pointer',
          )}
          style={{ backgroundColor: color }}
          onClick={() => {
            setIsOpen(true)
          }}
        />
        <CirclePicker
          colors={DEFAULT_COLORS}
          circleSize={32}
          circleSpacing={8}
          width="fit-content"
          onChange={handleOnChange}
        />
      </div>
      {isOpen && (
        <div className={classNames('absolute z-2')}>
          <div
            className={classNames('fixed inset-0')}
            onClick={() => setIsOpen(false)}
          />
          <ChromePicker color={color} onChange={handleOnChange} />
        </div>
      )}
    </div>
  )
}

export default ColorPicker
