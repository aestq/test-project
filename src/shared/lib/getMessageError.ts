import { type BaseServerError } from '@/shared/types'

export const getMessageError = (error: BaseServerError) => {
  const detail = error?.response?.data.detail

  if (Array.isArray(detail)) {
    return detail[0].loc[1] + ' ' + detail[0].msg
  }

  return detail ?? 'Произошла ошибка'
}
