import { useQuery } from 'react-query'
import { $api } from '@/shared/api'
import { getOrderParams } from '@/shared/consts'
import { type BaseServerError } from '@/shared/types'
import { type Link } from '../model/types/link'

export const useLinks = (args: string[]) => {
  return useQuery<Link[], BaseServerError>(['links', ...args], async () => {
    const response = await $api.get<Link[]>(`/statistics?${getOrderParams(...args)}`)
    return response.data
  })
}
