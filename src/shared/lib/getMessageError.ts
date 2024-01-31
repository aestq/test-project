import { type BaseServerError } from '@/shared/types'

export const getMessageError = (error?: BaseServerError) => {
  return error?.response?.data.detail ?? 'Произошла ошибка'
}
