import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { store } from '@/entities/User'
import { getLoginRoute } from '@/shared/consts'

export const PrivateRoute = () => {
  const location = useLocation()
  const user = store(state => state.authData)

  if (!user) {
    return <Navigate to={getLoginRoute()} state={{ location }} />
  }

  return <Outlet />
}
