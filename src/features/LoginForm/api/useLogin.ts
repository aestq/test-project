import { useMutation } from 'react-query'
import { type AuthData, useUserStore } from '@/entities/User'
import { $api } from '@/shared/api'
import { type BaseServerError } from '@/shared/types'

interface LoginArgs {
  username: string
  password: string
}

export const useLogin = () => {
  const setAuthData = useUserStore(state => state.setAuthData)

  return useMutation<AuthData, BaseServerError, LoginArgs>({
    mutationFn: async (data) => {
      const response = await $api.post('/login', data)
      return response.data
    },
    onSuccess: (data) => {
      setAuthData(data)
    }
  })
}
