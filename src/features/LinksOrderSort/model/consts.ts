import { type SelectItem } from '@/shared/ui'
import { type SortCounter, type SortShort, type SortTarget } from './schema'

export const targetItems: Array<SelectItem<SortTarget>> = [
  {
    value: 'asc_target',
    content: 'По возрастанию'
  },
  {
    value: 'desc_target',
    content: 'По убыванию'
  }
]

export const shortItems: Array<SelectItem<SortShort>> = [
  {
    value: 'asc_short',
    content: 'По возрастанию'
  },
  {
    value: 'desc_short',
    content: 'По убыванию'
  }
]

export const counterItems: Array<SelectItem<SortCounter>> = [
  {
    value: 'asc_counter',
    content: 'По возрастанию'
  },
  {
    value: 'desc_counter',
    content: 'По убыванию'
  }
]
