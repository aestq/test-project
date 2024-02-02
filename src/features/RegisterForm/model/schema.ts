export interface StoreSchema {
  username: string
  password: string
  setUsername: (value: string) => void
  setPassword: (value: string) => void
  register: () => Promise<void>
}
