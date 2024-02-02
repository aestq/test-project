import { clsx } from 'clsx'
import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <input
      className={clsx(
        'text-gray-200 bg-neutral-800 px-3.5 py-1.5 rounded-xl focus:outline focus:outline-2 focus:outline-neutral-700',
        className
      )}
      onChange={onChangeHandler}
      value={value}
      {...otherProps}
    />
  )
})

Input.displayName = 'Input'
