import { create } from 'zustand'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/consts'
import { createSelectors } from '@/shared/lib'
import { type StoreSchema } from './types/schema'

const useUserStoreBase = create<StoreSchema>((setState) => ({
  authData: undefined,
  _init: false,
  setAuthData: (authData) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, authData.access_token)
    setState({ authData })
  },
  initAuthData: () => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)

    if(token) {
      setState({
        authData: { access_token: token }
      })
    }
    setState({ _init: true })
  },
  logout: () => {
    setState({ authData: undefined })
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
  }
}))

export const useUserStore = createSelectors(useUserStoreBase)
