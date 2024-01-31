import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getHomeRoute } from '@/shared/consts'

export const PublicRoute = () => {
  const location = useLocation()
  const user = undefined

  if (user) {
    return <Navigate to={getHomeRoute()} state={{ location }} />
  }

  return <Outlet />
}
