import { memo } from 'react'
import { LinksTable } from '@/entities/Link'
import { useLinksQuery } from '../api/useLinksQuery'

interface HomePageTableProps {
  className?: string
}

export const HomePageTable = memo((props: HomePageTableProps) => {
  const { className } = props
  const { data, isLoading, isError } = useLinksQuery()

  if(isLoading) {
    return (
      <p>loading...</p>
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
    <LinksTable className={className} links={data} />
  )
})

HomePageTable.displayName = 'HomePageTable'
