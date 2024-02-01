import { create } from 'zustand'
import { type StoreSchema } from './schema'

export const useAddShortLinkStore = create<StoreSchema>((setState) => ({
  link: '',
  setLink: (value) => {
    setState({ link: value })
  }
}))
