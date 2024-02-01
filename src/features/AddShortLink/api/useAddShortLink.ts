import { useMutation } from 'react-query'
import { type Link } from '@/entities/Link'
import { $api } from '@/shared/api'
import { type BaseServerError } from '@/shared/types'

export const useAddShortLink = () => {
  return useMutation<Link, BaseServerError, string>({
    mutationFn: async (link: string) => {
      const response = await $api.post('/squeeze', undefined, {
        params: { link }
      })
      return response.data
    }
  })
}
