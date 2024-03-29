import { clsx } from 'clsx'
import { memo, useCallback } from 'react'
import { Pagination } from '@/shared/ui'
import { useHomePageStore } from '../model/store'

interface HomePagePaginationProps {
  className?: string
}

export const HomePagePagination = memo((props: HomePagePaginationProps) => {
  const { className } = props
  const offset = useHomePageStore.use.offset()
  const limit = useHomePageStore.use.limit()
  const countTotal = useHomePageStore.use.countTotal()

  const setOffset = useCallback((offset: number) => {
    useHomePageStore.setState({ offset })
  }, [])

  return (
    <footer className={clsx('flex items-center mt-5 flex-col', className)}>
      <Pagination
        offset={offset}
        setOffset={setOffset}
        countTotal={countTotal}
        limit={limit}
      />
      <p className='mt-3'>Всего: {countTotal}</p>
      <p className='mt-1'>Лимит: {limit}</p>
    </footer>
  )
})

HomePagePagination.displayName = 'HomePagePagination'
