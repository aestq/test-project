export const getHomeRoute = () => '/'
export const getLoginRoute = () => '/login'
export const getRegisterRoute = () => '/register'
export const getNotFoundRoute = () => '*'
export const getShortLink = (short: string) => `${__API__}/s/${short}`
export const getOrderParams = (...orders: string[]) => {
  return orders.map((order) => `order=${order}`)
    .join('&')
}
