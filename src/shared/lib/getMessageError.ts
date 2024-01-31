import { type BaseServerError } from '@/shared/types'

export const getMessageError = (error?: BaseServerError): string => {
  // TODO: Fix validate error
  if (Array.isArray(error?.response?.data.detail)) {
    return 'Произошла ошибка'
  }

  return error?.response?.data?.detail ?? 'Произошла ошибка'
}
