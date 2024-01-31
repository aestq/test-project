import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <button
      className='bg-neutral-800 px-3 py-1.5 rounded-xl hover:bg-neutral-700 transition focus:outline focus:outline-2 focus:outline-neutral-700'
      {...otherProps}
    >
      {children}
    </button>
  )
}
