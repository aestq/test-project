import { useMutation } from 'react-query'
import { type BaseServerError } from '@/shared/types'
import { useRegisterStore } from '../model/store'

export const useRegisterMutation = () => {
  const setUsername = useRegisterStore.use.setUsername()
  const setPassword = useRegisterStore.use.setPassword()
  const register = useRegisterStore.use.register()

  return useMutation<unknown, BaseServerError>({
    mutationFn: () => register(),
    onSuccess: () => {
      setUsername('')
      setPassword('')
    }
  })
}
