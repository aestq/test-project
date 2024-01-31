import { create } from 'zustand'
import { type StoreSchema } from './schema'

export const useLoginStore = create<StoreSchema>((setState) => ({
  username: '',
  password: '',

  setUsername: (value) => {
    setState({ username: value })
  },
  setPassword: (value) => {
    setState({ password: value })
  }
}))
