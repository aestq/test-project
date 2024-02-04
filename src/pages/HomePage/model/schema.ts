import type { SortTarget, SortShort, SortCounter } from '@/features/LinksOrderSort'
import { type Link } from '@/entities/Link'

export interface StoreSchema {
  // pagination
  offset: number
  limit: number
  countTotal: number

  // sort order
  target: SortTarget
  short: SortShort
  counter: SortCounter

  fetchLinks: () => Promise<Link[]>
}
