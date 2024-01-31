import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getLoginRoute } from '@/shared/consts'

export const PrivateRoute = () => {
  const location = useLocation()
  const user = undefined

  if (!user) {
    return <Navigate to={getLoginRoute()} state={{ location }} />
  }

  return <Outlet />
}
