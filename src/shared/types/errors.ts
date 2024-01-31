import { type AxiosError } from 'axios'

interface ServerError {
  detail?: string
}

export type BaseServerError = AxiosError<ServerError>
