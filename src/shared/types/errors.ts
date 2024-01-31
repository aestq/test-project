import { type AxiosError } from 'axios'

// interface ValidateServerError {
//   loc: [string, string]
//   msg: string
//   type: string
// }

interface ServerError {
  detail?: string
}

export type BaseServerError = AxiosError<ServerError>
