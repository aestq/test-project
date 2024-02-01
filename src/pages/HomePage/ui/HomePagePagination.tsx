import { memo } from 'react'
import { Pagination } from '@/shared/ui'
import { useHomePageStore } from '../model/store'

export const HomePagePagination = memo(() => {
  const offset = useHomePageStore(state => state.offset)
  const setOffset = useHomePageStore(state => state.setOffset)
  const limit = useHomePageStore(state => state.limit)
  const count = useHomePageStore(state => state.count)

  return (
    <div>
      <Pagination
        offset={offset}
        setOffset={setOffset}
        count={count}
        limit={limit}
      />
    </div>
  )
})

HomePagePagination.displayName = 'HomePagePagination'
