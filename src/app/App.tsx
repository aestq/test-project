import { useEffect } from 'react'
import { AppRouter } from '@/app/providers/Routing'
import { useUserStore } from '@/entities/User'

export const App = () => {
  const initAuthData = useUserStore(state => state.initAuthData)

  useEffect(() => {
    initAuthData()
  }, [])

  return <AppRouter />
}
