import { useMutation } from 'react-query'
import { useRegisterStore } from '@/features/RegisterForm/model/store.ts'
import { type AuthData } from '@/entities/User'
import { $api } from '@/shared/api'
import { type BaseServerError } from '@/shared/types'

interface RegisterArgs {
  username: string
  password: string
}

export const useRegister = () => {
  const clearForm = useRegisterStore(state => state.clearForm)

  return useMutation<AuthData, BaseServerError, RegisterArgs>({
    mutationFn: async (data) => {
      const response = await $api.post('/register', undefined, {
        params: data
      })
      return response.data
    },
    onSuccess: () => {
      clearForm()
    }
  })
}
