import { useMutation } from 'react-query'
import { type AuthData } from '@/entities/User'
import { $api } from '@/shared/api'
import { type BaseServerError } from '@/shared/types'

interface RegisterArgs {
  username: string
  password: string
}

export const useRegister = () => {
  return useMutation<AuthData, BaseServerError, RegisterArgs>({
    mutationFn: async (data) => {
      const response = await $api.post('/register', undefined, {
        params: data
      })
      return response.data
    }
  })
}
