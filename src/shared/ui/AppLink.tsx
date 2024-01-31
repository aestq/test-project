import { clsx } from 'clsx'
import { memo, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
  className?: string
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <Link
      className={clsx('underline text-gray-200', className)}
      {...otherProps}
    >
      {children}
    </Link>
  )
})

AppLink.displayName = 'AppLink'
