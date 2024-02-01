import { clsx } from 'clsx'
import { memo } from 'react'
import { Select } from '@/shared/ui'
import { counterItems, shortItems, targetItems } from '../model/consts'
import { useLinksOrderSortStore } from '../model/store'

interface LinksOrderSortProps {
  className?: string
}

export const LinksOrderSort = memo((props: LinksOrderSortProps) => {
  const { className } = props
  const short = useLinksOrderSortStore(state => state.short)
  const target = useLinksOrderSortStore(state => state.target)
  const counter = useLinksOrderSortStore(state => state.counter)
  const setShort = useLinksOrderSortStore(state => state.setShort)
  const setTarget = useLinksOrderSortStore(state => state.setTarget)
  const setCounter = useLinksOrderSortStore(state => state.setCounter)

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <Select
        label='Short sort'
        items={shortItems}
        value={short}
        onChange={setShort}
      />
      <Select
        label='Target sort'
        items={targetItems}
        value={target}
        onChange={setTarget}
      />
      <Select
        label='Counter sort'
        items={counterItems}
        value={counter}
        onChange={setCounter}
      />
    </div>
  )
})

LinksOrderSort.displayName = 'LinksOrderSort'
