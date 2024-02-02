import { useEffect } from 'react'
import { AppRouter } from '@/app/providers/Routing'
import { store } from '@/entities/User'

export const App = () => {
  const initAuthData = store.use.initAuthData()
  const init = store.use._init()

  useEffect(() => {
    initAuthData()
  }, [])

  if(!init) {
    return
  }

  return <AppRouter />
}
