import { clsx } from 'clsx'
import { memo } from 'react'
import { Select } from '@/shared/ui'
import { counterItems, shortItems, targetItems } from '../model/consts'
import { type SortCounter, type SortShort, type SortTarget } from '../model/types'

interface LinksOrderSortProps {
  className?: string
  target: SortTarget
  short: SortShort
  counter: SortCounter
  onChangeTarget: (value: SortTarget) => void
  onChangeShort: (value: SortShort) => void
  onChangeCounter: (value: SortCounter) => void
}

export const LinksOrderSort = memo((props: LinksOrderSortProps) => {
  const {
    className,
    target,
    short,
    counter,
    onChangeTarget,
    onChangeCounter,
    onChangeShort
  } = props

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <Select
        label='Short'
        items={shortItems}
        value={short}
        onChange={onChangeShort}
      />
      <Select
        label='Target'
        items={targetItems}
        value={target}
        onChange={onChangeTarget}
      />
      <Select
        label='Counter'
        items={counterItems}
        value={counter}
        onChange={onChangeCounter}
      />
    </div>
  )
})

LinksOrderSort.displayName = 'LinksOrderSort'
