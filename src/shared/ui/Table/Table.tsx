import { clsx } from 'clsx'
import { memo } from 'react'
import { Td } from './components/Td'
import { Th } from './components/Th'
import { Tr } from './components/Tr'
import { type BaseTableProps } from './types/baseProps'

interface TableComponentProps extends BaseTableProps {}

const TableComponent = memo((props: TableComponentProps) => {
  const { className, children } = props

  return (
    <table
      className={clsx(className)}
    >
      {children}
    </table>
  )
})

TableComponent.displayName = 'Table'

export const Table = Object.assign(TableComponent, {
  Th,
  Tr,
  Td
})
