import { useCallback, useMemo } from 'react'
import { range } from '@/shared/lib'

export const DOTS = -1

interface UsePaginationResult {
  paginationList: number[]
  onChangePage: (page: number) => () => void
  onPrev: () => void
  onNext: () => void
  currentPage: number
}

interface UsePaginationOption {
  countTotal: number
  limit: number
  offset: number
  setOffset: (offset: number) => void
}

export const usePagination = (options: UsePaginationOption): UsePaginationResult => {
  const {
    countTotal,
    limit,
    offset,
    setOffset
  } = options

  const totalPageCount = Math.ceil(countTotal / limit)
  const currentPage = (offset / limit) + 1

  const onChangePage = useCallback((page: number) => {
    return () => {
      setOffset((page - 1) * limit)
    }
  }, [setOffset, limit])

  const onPrev = useCallback(() => {
    if(currentPage === 1) {
      return
    }
    setOffset(offset - limit)
  }, [setOffset, limit, offset])

  const onNext = useCallback(() => {
    if(currentPage === totalPageCount) {
      return
    }
    setOffset(offset + limit)
  }, [setOffset, limit, offset])

  const paginationList = useMemo(() => {
    if (countTotal <= 7) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1)
    const rightSiblingIndex = Math.min(
      currentPage + 2,
      totalPageCount
    )

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * 2
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * 2
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }

    return []
  }, [countTotal, limit, offset, currentPage, totalPageCount])

  return {
    paginationList,
    onChangePage,
    onPrev,
    onNext,
    currentPage
  }
}
