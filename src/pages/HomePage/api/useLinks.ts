import { useQuery } from 'react-query'
import { type Link } from '@/entities/Link'
import { $api } from '@/shared/api'
import { getOrderParams } from '@/shared/consts'
import { type BaseServerError } from '@/shared/types'
import { useHomePageStore } from '../model/store'

export const useLinks = (args: string[]) => {
  const setCount = useHomePageStore(state => state.setCount)
  const offset = useHomePageStore(state => state.offset)
  const limit = useHomePageStore(state => state.limit)

  return useQuery<Link[], BaseServerError>(['links', ...args, offset], {
    queryFn: async () => {
      const response = await $api.get<Link[]>(`/statistics?${getOrderParams(...args)}&limit=${limit}&offset=${offset}`)
      setCount(Number(response.headers['x-total-count'] ?? 0))
      return response.data
    }
  })
}
