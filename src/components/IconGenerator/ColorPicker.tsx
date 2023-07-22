import * as React from 'react'
import { useCallback } from 'react'
import { ChromePicker, type ColorChangeHandler } from 'react-color'

export interface ColorPickerProps {
  onChange: (value: string) => void
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ onChange }) => {
  const handleOnChange: ColorChangeHandler = useCallback(
    (color, _event) => {
      onChange(color.hex)
    },
    [onChange],
  )

  return <ChromePicker onChange={handleOnChange} />
}

export default ColorPicker
