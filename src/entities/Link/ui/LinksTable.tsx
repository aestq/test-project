import { clsx } from 'clsx'
import { memo } from 'react'
import { Table } from '@/shared/ui'
import { type Link } from '../model/types/link'
import { LinksTableItem } from './LinksTableItem'

interface LinksTableProps {
  className?: string
  links?: Link[]
  isLoading: boolean
  isError?: boolean
}

const render = (link: Link) => (
  <LinksTableItem
    key={link.id}
    link={link}
  />
)

const emptyMessage = (
  <h2 className='font-bold text-2xl text-center'>
    Не найдено
  </h2>
)

export const LinksTable = memo((props: LinksTableProps) => {
  const {
    className,
    links,
    isLoading,
    isError
  } = props

  if(isLoading) {
    return (
      <div>
        load
      </div>
    )
  }

  if (isError) {
    return (
      <h2 className='font-bold text-2xl text-red-600 text-center mt-20'>
        Произошла ошибка при загрузке таблицы
      </h2>
    )
  }

  return (
    <Table
      className={clsx('w-full mt-10', className)}
    >
      <thead>
      <Table.Tr>
        <Table.Th>Short</Table.Th>
        <Table.Th>Target</Table.Th>
        <Table.Th>Counter</Table.Th>
      </Table.Tr>
      </thead>
      <tbody>
      {links?.length ? links?.map(render) : emptyMessage}
      </tbody>
    </Table>
  )
})

LinksTable.displayName = 'LinksTable'
