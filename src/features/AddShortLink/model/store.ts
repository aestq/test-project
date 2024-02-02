import { create } from 'zustand'
import { createSelectors } from '@/shared/lib'
import { type StoreSchema } from './schema'

const useAddShortLinkStoreBase = create<StoreSchema>((setState) => ({
  link: '',
  setLink: (value) => {
    setState({ link: value })
  }
}))

export const useAddShortLinkStore = createSelectors(useAddShortLinkStoreBase)
