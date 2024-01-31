import { type RouteProps } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { RegisterPage } from '@/pages/RegisterPage'
import {
  getHomeRoute, getLoginRoute, getNotFoundRoute, getRegisterRoute
} from '@/shared/consts'

export const publicRoutes: RouteProps[] = [
  {
    path: getLoginRoute(),
    element: <LoginPage />
  },
  {
    path: getRegisterRoute(),
    element: <RegisterPage />
  }
]

export const privateRoutes: RouteProps[] = [
  {
    path: getHomeRoute(),
    element: <HomePage />
  }
]

export const commonRoutes: RouteProps[] = [
  {
    path: getNotFoundRoute(),
    element: <NotFoundPage />
  }
]
