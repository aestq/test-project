import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUserStore } from '@/entities/User'
import { getLoginRoute } from '@/shared/consts'

export const PrivateRoute = () => {
  const location = useLocation()
  const user = useUserStore(state => state.authData)

  if (!user) {
    return <Navigate to={getLoginRoute()} state={{ location }} />
  }

  return <Outlet />
}
