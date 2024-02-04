import { create } from 'zustand'
import type { Link } from '@/entities/Link'
import { $api } from '@/shared/api'
import { createSelectors } from '@/shared/lib'
import { type StoreSchema } from './schema'

const getOrderParams = (...params: string[]) => {
  return params
    .filter(Boolean)
    .map((param) => `order=${param}`)
    .join('&')
}

const useHomePageStoreBase = create<StoreSchema>((setState, getState) => ({
  limit: 7,
  offset: 0,
  countTotal: 0,
  target: '',
  counter: '',
  short: '',

  fetchLinks: async () => {
    const { target, short, offset, limit, counter } = getState()
    const orderParams = getOrderParams(target, short, counter)

    const response = await $api.get<Link[]>(`/statistics?${orderParams}`, {
      params: {
        offset,
        limit
      }
    })
    setState({ countTotal: Number(response.headers['x-total-count'] ?? 0) })
    return response.data
  }
}))

export const useHomePageStore = createSelectors(useHomePageStoreBase)
