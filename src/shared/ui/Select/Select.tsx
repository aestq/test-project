import { type ChangeEvent, memo, type SelectHTMLAttributes } from 'react'

export interface SelectItem<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  className?: string
  items?: Array<SelectItem<T>>
  onChange?: (value: T) => void
  value?: string
  label?: string
}

function SelectRoot<T extends string> (props: SelectProps<T>) {
  const {
    items = [],
    onChange,
    value,
    className,
    label,
    ...otherProps
  } = props

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T)
  }

  return (
    <label className={className}>
      {label && (
        <p className='mb-1 ml-1.5 block text-sm font-medium'>{label}</p>
      )}
      <select
        className='bg-neutral-800 border-2 border-neutral-700 rounded-lg px-2.5 py-1.5 w-full focus:outline-neutral-700 focus:outline-1'
        onChange={onChangeSelect}
        value={value}
        {...otherProps}
      >
        {items.map(item => (
          <option value={item.value} key={item.value}>
            {item.content}
          </option>
        ))}
      </select>
    </label>
  )
}

export const Select = memo(SelectRoot) as typeof SelectRoot
