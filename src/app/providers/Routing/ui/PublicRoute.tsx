import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { store } from '@/entities/User'
import { getHomeRoute } from '@/shared/consts'

export const PublicRoute = () => {
  const location = useLocation()
  const user = store(state => state.authData)

  if (user) {
    return <Navigate to={getHomeRoute()} state={{ location }} />
  }

  return <Outlet />
}
