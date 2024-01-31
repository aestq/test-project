import { clsx } from 'clsx'
import { memo } from 'react'
import { type BaseTableProps } from '../types/baseProps'

interface ThProps extends BaseTableProps {}

export const Th = memo((props: ThProps) => {
  const { className, children } = props

  return (
    <th className={clsx('text-xl px-3 py-2 first:rounded-tl-xl last:rounded-tr-xl bg-neutral-700', className)}>
      {children}
    </th>
  )
})

Th.displayName = 'Th'
