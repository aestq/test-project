import { create } from 'zustand'
import { type StoreSchema } from './schema'

export const useRegisterStore = create<StoreSchema>((setState) => ({
  username: '',
  password: '',

  setUsername: (value) => {
    setState({ username: value })
  },
  setPassword: (value) => {
    setState({ password: value })
  },
  clearForm: () => {
    setState({
      username: '',
      password: ''
    })
  }
}))
