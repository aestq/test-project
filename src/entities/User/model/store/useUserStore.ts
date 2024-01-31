import { create } from 'zustand'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/consts'
import { type StoreSchema } from '../types/schema'

export const useUserStore = create<StoreSchema>((setState) => ({
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
  },
  logout: () => {
    setState({ authData: undefined })
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
  }
}))
