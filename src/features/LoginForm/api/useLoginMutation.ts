import { useMutation } from 'react-query'
import { type AuthData, useUserStore } from '@/entities/User'
import { type BaseServerError } from '@/shared/types'
import { useLoginStore } from '../model/store'

export const useLoginMutation = () => {
  const setAuthData = useUserStore.use.setAuthData()
  const login = useLoginStore.use.login()
  const setPassword = useLoginStore.use.setPassword()
  const setUsername = useLoginStore.use.setUsername()

  return useMutation<AuthData, BaseServerError>({
    mutationFn: () => login(),
    onError: () => {
      setPassword('')
    },
    onSuccess: (data) => {
      setAuthData(data)
      setUsername('')
      setPassword('')
    }
  })
}
