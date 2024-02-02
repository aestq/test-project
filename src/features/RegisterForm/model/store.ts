import { create } from 'zustand'
import { $api } from '@/shared/api'
import { createSelectors } from '@/shared/lib'
import { type StoreSchema } from './schema'

const useRegisterStoreBase = create<StoreSchema>((setState, getState) => ({
  username: '',
  password: '',

  setUsername: (value) => {
    setState({ username: value })
  },
  setPassword: (value) => {
    setState({ password: value })
  },
  register: async () => {
    const { username, password } = getState()

    const response = await $api.post('/register', undefined, {
      params: {
        username,
        password
      }
    })
    return response.data
  }
}))

export const useRegisterStore = createSelectors(useRegisterStoreBase)
