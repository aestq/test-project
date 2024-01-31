import { create } from 'zustand'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/consts'
import { type StoreSchema } from '../types/schema'

export const useUserStore = create<StoreSchema>((setState) => ({
  authData: undefined,
  _init: false,

  setAuthData: (authData) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, authData.access_token)
    setState({ authData })
  }
}))
