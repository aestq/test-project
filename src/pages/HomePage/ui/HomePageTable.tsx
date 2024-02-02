import { clsx } from 'clsx'
import { memo } from 'react'
import { LinksTable } from '@/entities/Link'
import { useLinksQuery } from '../api/useLinksQuery'
import { HomePagePagination } from './HomePagePagination'

interface HomePageTableProps {
  className?: string
}

export const HomePageTable = memo((props: HomePageTableProps) => {
  const { className } = props
  const { data, isLoading, isError } = useLinksQuery()

  if(isLoading) {
    return (
      <div className='text-center mt-5'>
        loading...
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
    <>
      <main>
        <LinksTable className={clsx('mt-5', className)} links={data} />
      </main>
      <HomePagePagination />
    </>
  )
})

HomePageTable.displayName = 'HomePageTable'
