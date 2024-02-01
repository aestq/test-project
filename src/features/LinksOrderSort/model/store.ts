import { create } from 'zustand'
import { type StoreSchema } from './schema'

export const useLinksOrderSortStore = create<StoreSchema>((setState) => ({
  target: 'asc_target',
  counter: 'asc_counter',
  short: 'asc_short',

  setTarget: (target) => {
    setState({ target })
  },
  setShort: (short) => {
    setState({ short })
  },
  setCounter: (counter) => {
    setState({ counter })
  }
}))
