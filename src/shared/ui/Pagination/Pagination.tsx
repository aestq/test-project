import { clsx } from 'clsx'
import { memo } from 'react'
import { Button } from '@/shared/ui'

interface PaginationProps {
  className?: string
  offset: number
  setOffset: (offset: number) => void
  count: number
  limit: number
}

export const Pagination = memo((props: PaginationProps) => {
  const {
    className,
    offset,
    setOffset,
    count,
    limit
  } = props

  const pages = Math.ceil(count / limit)

  const onClick = (number: number) => {
    return () => {
      setOffset((number - 1) * limit)
    }
  }

  return (
    <div className={clsx('flex gap-2', className)}>
      {new Array(pages).fill(0).map((_, index) => {
        const currentPage = (offset / limit) + 1
        const number = index + 1

        return (
          <Button
            className={clsx('rounded', { 'bg-stone-700': currentPage === number })}
            key={`pagination-key-${number}`}
            onClick={onClick(number)}
          >
            {number}
          </Button>
        )
      })}
    </div>
  )
})

Pagination.displayName = 'Pagination'
