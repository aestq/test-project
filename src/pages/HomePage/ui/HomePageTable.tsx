import { memo } from 'react'
import { AddShortLinkModal } from '@/features/AddShortLink'
import { LinksOrderSort, useLinksOrderSortStore } from '@/features/LinksOrderSort'
import { LinksTable } from '@/entities/Link'
import { useOpen } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { useLinks } from '../api/useLinks'
import { HomePagePagination } from './HomePagePagination'

interface HomePageTableProps {
  className?: string
}

export const HomePageTable = memo((props: HomePageTableProps) => {
  const { className } = props
  const target = useLinksOrderSortStore(state => state.target)
  const short = useLinksOrderSortStore(state => state.short)
  const counter = useLinksOrderSortStore(state => state.counter)
  const { data, isLoading, isError } = useLinks([target, short, counter])
  const { isOpen, onOpen, onClose } = useOpen()

  return (
    <main className={className}>
      <div className='flex justify-between items-center'>
        <LinksOrderSort />
        <Button onClick={onOpen}>
          Создать ссылку
        </Button>
        <AddShortLinkModal isOpen={isOpen} onClose={onClose} />
      </div>
      <LinksTable
        links={data}
        isLoading={isLoading}
        isError={isError}
      />
      <HomePagePagination />
    </main>
  )
})

HomePageTable.displayName = 'HomePageTable'
