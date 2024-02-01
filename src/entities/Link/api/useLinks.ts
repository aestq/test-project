import { useQuery } from 'react-query'
import { $api } from '@/shared/api'
import { type BaseServerError } from '@/shared/types'
import { type Link } from '../model/types/link'

export const useLinks = () => {
  return useQuery<Link[], BaseServerError>(['links'], async () => {
    const response = await $api.get<Link[]>('/statistics')
    return response.data
  })
}
