import { create } from 'zustand'
import { type StoreSchema } from '../types/schema'

export const useUserStore = create<StoreSchema>((setState) => ({
  authData: undefined,
  _init: false,

  setAuthData: (authData) => {
    setState({ authData })
  }
}))
