import { memo } from 'react'
import { getShortLink } from '@/shared/consts'
import { AppLink, Table } from '@/shared/ui'

export const LinksTableItem = memo(() => {
  return (
    <Table.Tr>
      <Table.Td>
        <AppLink target='_blank' to={getShortLink('Z4QI2')}>
          {getShortLink('Z4QI2')}
        </AppLink>
      </Table.Td>
      <Table.Td>
        <AppLink target='_blank' to='https://www.docker.com/'>
          https://www.docker.com/
        </AppLink>
      </Table.Td>
      <Table.Td>
        7
      </Table.Td>
    </Table.Tr>
  )
})

LinksTableItem.displayName = 'LinksTableItem'
