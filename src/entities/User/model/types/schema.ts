import { type AuthData } from './user'

export interface StoreSchema {
  authData?: AuthData
  _init: boolean
  setAuthData: (authData: AuthData) => void
}
