import axios from 'axios'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/consts'

export const $api = axios.create({
  baseURL: __API__ + '/api'
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`
  return config
})
