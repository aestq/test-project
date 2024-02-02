import { type AuthData } from '@/entities/User'

export interface StoreSchema {
  username: string
  password: string
  setUsername: (value: string) => void
  setPassword: (value: string) => void

  login: () => Promise<AuthData>
}
