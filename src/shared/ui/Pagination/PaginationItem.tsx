import { clsx } from 'clsx'
import { memo } from 'react'
import { Button } from '@/shared/ui'
import { DOTS } from './usePagination'

interface PaginationItemProps {
  className?: string
  pageNumber: number
  currentPage: number
  onChange: () => void
}

export const PaginationItem = memo((props: PaginationItemProps) => {
  const {
    className,
    pageNumber,
    currentPage,
    onChange
  } = props

  if(pageNumber === DOTS) {
    return (
      <span className={className}>&#8230;</span>
    )
  }

  return (
    <Button
      className={clsx('rounded', { 'bg-stone-700': currentPage === pageNumber }, className)}
      onClick={onChange}
    >
      {pageNumber}
    </Button>
  )
})

PaginationItem.displayName = 'PaginationItem'
