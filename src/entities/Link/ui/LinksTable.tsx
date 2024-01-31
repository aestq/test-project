import { clsx } from 'clsx'
import { memo } from 'react'
import { Table } from '@/shared/ui'
import { LinksTableItem } from './LinksTableItem'

interface LinksTableProps {
  className?: string
}

export const LinksTable = memo((props: LinksTableProps) => {
  const { className } = props

  return (
    <Table
      className={clsx('w-full mt-10', className)}
    >
      <thead>
        <Table.Tr>
          <Table.Th>
            Короткая ссылка
          </Table.Th>
          <Table.Th>
            Длинная ссылка
          </Table.Th>
          <Table.Th>
            Переходы
          </Table.Th>
        </Table.Tr>
      </thead>
      <tbody>
        <LinksTableItem />
        <LinksTableItem />
        <LinksTableItem />
        <LinksTableItem />
      </tbody>
    </Table>
  )
})

LinksTable.displayName = 'LinksTable'
