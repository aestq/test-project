import { clsx } from 'clsx'
import { memo } from 'react'
import { type BaseTableProps } from '../types/baseProps'

interface TdProps extends BaseTableProps {}

export const Td = memo((props: TdProps) => {
  const { className, children } = props

  return (
    <td className={clsx('px-4, py-3', className)}>
      {children}
    </td>
  )
})

Td.displayName = 'Td'
