import { useEffect } from 'react'
import { AppRouter } from '@/app/providers/Routing'
import { useUserStore } from '@/entities/User'

export const App = () => {
  const initAuthData = useUserStore.use.initAuthData()
  const init = useUserStore.use._init()

  useEffect(() => {
    initAuthData()
  }, [])

  if(!init) {
    return
  }

  return <AppRouter />
}
