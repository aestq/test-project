import { clsx } from 'clsx'
import { memo } from 'react'
import { Button } from '@/shared/ui'
import { PaginationItem } from './PaginationItem'
import { usePagination } from './usePagination'

interface PaginationProps {
  className?: string
  offset: number
  setOffset: (offset: number) => void
  countTotal: number
  limit: number
}

export const Pagination = memo((props: PaginationProps) => {
  const {
    className,
    offset,
    setOffset,
    countTotal,
    limit
  } = props

  const {
    paginationList,
    onChangePage,
    onPrev,
    onNext,
    currentPage
  } = usePagination({ limit, offset, countTotal, setOffset })

  if (paginationList.length <= 1) {
    return null
  }

  return (
    <div className={clsx('flex gap-2', className)}>
      <Button onClick={onPrev}>
        {'<'}
      </Button>
      {paginationList.map((pageNumber, index) => (
        <PaginationItem
          key={`pagination-item-key-${index}`}
          pageNumber={pageNumber}
          currentPage={currentPage}
          onChange={onChangePage(pageNumber)}
        />
      ))}
      <Button onClick={onNext}>
        {'>'}
      </Button>
    </div>
  )
})

Pagination.displayName = 'Pagination'
