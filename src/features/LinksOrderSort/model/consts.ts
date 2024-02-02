import { type SelectItem } from '@/shared/ui'
import { type SortCounter, type SortShort, type SortTarget } from './types'

export const targetItems: Array<SelectItem<SortTarget>> = [
  {
    value: 'asc_target',
    content: 'По возрастанию'
  },
  {
    value: 'desc_target',
    content: 'По убыванию'
  },
  {
    value: '',
    content: 'Без сортировки'
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
  },
  {
    value: '',
    content: 'Без сортировки'
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
  },
  {
    value: '',
    content: 'Без сортировки'
  }
]
