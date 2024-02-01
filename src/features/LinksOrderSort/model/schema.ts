export type SortTarget = 'asc_target' | 'desc_target'
export type SortShort = 'asc_short' | 'desc_short'
export type SortCounter = 'asc_counter' | 'desc_counter'

export interface StoreSchema {
  target: SortTarget
  short: SortShort
  counter: SortCounter

  setTarget: (target: SortTarget) => void
  setCounter: (counter: SortCounter) => void
  setShort: (short: SortShort) => void
}
