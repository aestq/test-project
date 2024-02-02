import { memo, useCallback } from 'react'
import { AddShortLinkModal } from '@/features/AddShortLink'
import {
  LinksOrderSort, type SortCounter, type SortShort, type SortTarget
} from '@/features/LinksOrderSort'
import { useOpen } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { useHomePageStore } from '../model/store'

interface HomePageFiltersProps {
  className?: string
}

export const HomePageFilters = memo((props: HomePageFiltersProps) => {
  const { className } = props
  const target = useHomePageStore.use.target()
  const short = useHomePageStore.use.short()
  const counter = useHomePageStore.use.counter()
  const { isOpen, onOpen, onClose } = useOpen()

  const onChangeTarget = useCallback((target: SortTarget) => {
    useHomePageStore.setState({ target })
  }, [])

  const onChangeShort = useCallback((short: SortShort) => {
    useHomePageStore.setState({ short })
  }, [])

  const onChangeCounter = useCallback((counter: SortCounter) => {
    useHomePageStore.setState({ counter })
  }, [])

  return (
    <section className={className}>
      <div className='flex justify-between items-center'>
        <LinksOrderSort
          target={target}
          counter={counter}
          short={short}
          onChangeTarget={onChangeTarget}
          onChangeShort={onChangeShort}
          onChangeCounter={onChangeCounter}
        />
        <Button onClick={onOpen}>
          Сократить ссылку
        </Button>
      </div>
      <AddShortLinkModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </section>
  )
})

HomePageFilters.displayName = 'HomePageFilters'
