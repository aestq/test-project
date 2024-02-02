import { create } from 'zustand'
import { type AuthData } from '@/entities/User'
import { $api } from '@/shared/api'
import { createSelectors } from '@/shared/lib'
import { type StoreSchema } from './schema'

const useLoginStoreBase = create<StoreSchema>((setState, getState) => ({
  username: '',
  password: '',

  setUsername: (value) => {
    setState({ username: value })
  },
  setPassword: (value) => {
    setState({ password: value })
  },

  login: async () => {
    const { username, password } = getState()

    const response = await $api.post<AuthData>('/login', {
      username,
      password
    })
    return response.data
  }
}))

export const useLoginStore = createSelectors(useLoginStoreBase)
