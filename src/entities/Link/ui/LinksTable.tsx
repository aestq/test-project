import { clsx } from 'clsx'
import { memo } from 'react'
import { Table } from '@/shared/ui'
import { type Link } from '../model/types/link'
import { LinksTableItem } from './LinksTableItem'

interface LinksTableProps {
  className?: string
  links?: Link[]
}

const render = (link: Link) => (
  <LinksTableItem
    key={link.id}
    link={link}
  />
)

export const LinksTable = memo((props: LinksTableProps) => {
  const { className, links } = props

  if(!links?.length) {
    return (
      <div className='h-[60vh] flex items-center justify-center'>
        <h2 className='font-bold text-2xl'>
          Не найдено
        </h2>
      </div>
    )
  }

  return (
    <Table
      className={clsx('w-full mt-5', className)}
    >
      <thead>
        <Table.Tr>
          <Table.Th>Short</Table.Th>
          <Table.Th>Target</Table.Th>
          <Table.Th>Counter</Table.Th>
        </Table.Tr>
      </thead>
      <tbody>
        {links?.map(render)}
      </tbody>
    </Table>
  )
})

LinksTable.displayName = 'LinksTable'
