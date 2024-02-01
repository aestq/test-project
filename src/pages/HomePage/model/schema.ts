export interface StoreSchema {
  offset: number
  limit: number
  count: number

  setCount: (count: number) => void
  setOffset: (offset: number) => void
}
