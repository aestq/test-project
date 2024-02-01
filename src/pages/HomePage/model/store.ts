import { create } from 'zustand'
import { type StoreSchema } from './schema'

export const useHomePageStore = create<StoreSchema>((setState) => ({
  limit: 5,
  offset: 0,
  count: 0,

  setCount: (count) => {
    setState({ count })
  },
  setOffset: (offset) => {
    setState({ offset })
  }
}))
