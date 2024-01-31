import { clsx } from 'clsx'
import { type HTMLAttributes, memo, type ReactNode } from 'react'

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

export const Alert = memo((props: AlertProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <div
      className={clsx('flex justify-center items-center bg-green-950 0 p-4 text-sm rounded-lg absolute top-10 right-10 transition', className)}
      role='alert'
      {...otherProps}
    >
      <p>
        {children}
      </p>
    </div>
  )
})

Alert.displayName = 'Alert'
