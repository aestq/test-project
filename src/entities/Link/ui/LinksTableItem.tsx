import { memo } from 'react'
import { getShortLink } from '@/shared/consts'
import { AppLink, CopyButton, Table } from '@/shared/ui'
import { type Link } from '../model/types/link'

interface LinksTableItemProps {
  className?: string
  link: Link
}

export const LinksTableItem = memo((props: LinksTableItemProps) => {
  const { className, link } = props

  return (
    <Table.Tr className={className}>
      <Table.Td className='w-96'>
        <div className='flex items-center justify-center gap-3'>
          <AppLink
            to={getShortLink(link.short)}
            target='_blank'
          >
            {getShortLink(link.short)}
          </AppLink>
          <CopyButton text={getShortLink(link.short)} />
        </div>
      </Table.Td>
      <Table.Td>
        <div className='flex items-center justify-center gap-3'>
          <AppLink
            className='text-nowrap w-96 text-ellipsis overflow-hidden'
            to={link.target}
            target='_blank'
          >
            {link.target}
          </AppLink>
          <CopyButton text={link.target}/>
        </div>
      </Table.Td>
      <Table.Td className='w-40'>
        <p className='text-center'>
          {link.counter}
        </p>
      </Table.Td>
    </Table.Tr>
  )
})

LinksTableItem.displayName = 'LinksTableItem'
