import { useMutation } from 'react-query'
import { type AuthData, useUserStore } from '@/entities/User'
import { $api } from '@/shared/api'
import { type BaseServerError } from '@/shared/types'
import { useLoginStore } from '../model/store'

interface LoginArgs {
  username: string
  password: string
}

export const useLogin = () => {
  const setAuthData = useUserStore(state => state.setAuthData)
  const setPassword = useLoginStore(state => state.setPassword)

  return useMutation<AuthData, BaseServerError, LoginArgs>({
    mutationFn: async (data) => {
      const response = await $api.post('/login', data)
      return response.data
    },
    onError: () => {
      setPassword('')
    },
    onSuccess: (data) => {
      setAuthData(data)
    }
  })
}
