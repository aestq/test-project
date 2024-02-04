import { clsx } from 'clsx'
import { memo } from 'react'
import { LinksTable } from '@/entities/Link'
import { Spinner } from '@/shared/ui'
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
      <div className='flex justify-center items-end h-72'>
        <Spinner />
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
