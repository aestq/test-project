import { Routes, Route, type RouteProps } from 'react-router-dom'
import { commonRoutes, privateRoutes, publicRoutes } from '../config/routes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const render = (route: RouteProps) => (
  <Route
    path={route.path}
    element={route.element}
    key={route.path}
  />
)

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        {publicRoutes.map(render)}
      </Route>
      <Route element={<PrivateRoute />}>
        {privateRoutes.map(render)}
      </Route>
      {commonRoutes.map(render)}
    </Routes>
  )
}
