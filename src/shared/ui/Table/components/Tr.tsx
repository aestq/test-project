import { clsx } from 'clsx'
import { memo } from 'react'
import { type BaseTableProps } from '../types/baseProps'

interface TrProps extends BaseTableProps {}

export const Tr = memo((props: TrProps) => {
  const { className, children } = props

  return (
    <tr
      className={clsx('bg-neutral-800 border-b border-neutral-700', className)}
    >
      {children}
    </tr>
  )
})

Tr.displayName = 'Tr'
