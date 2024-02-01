import { memo } from 'react'
import { LinksOrderSort, useLinksOrderSortStore } from '@/features/LinksOrderSort'
import { LinksTable, useLinks } from '@/entities/Link'
import { Button } from '@/shared/ui'

interface HomePageTableProps {
  className?: string
}

export const HomePageTable = memo((props: HomePageTableProps) => {
  const { className } = props
  const target = useLinksOrderSortStore(state => state.target)
  const short = useLinksOrderSortStore(state => state.short)
  const counter = useLinksOrderSortStore(state => state.counter)
  const { data, isLoading, isError } = useLinks([target, short, counter])

  return (
    <main className={className}>
      <div className='flex justify-between items-center'>
        <LinksOrderSort />
        <Button>
          Создать ссылку
        </Button>
      </div>
      <LinksTable
        links={data}
        isLoading={isLoading}
        isError={isError}
      />
    </main>
  )
})

HomePageTable.displayName = 'HomePageTable'
