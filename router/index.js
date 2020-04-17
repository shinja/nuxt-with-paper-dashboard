import { getRoutes } from './routes'

export default {
  // routeNameSplitter: '/',
  base: process.env.ROUTER_BASE || '',
  extendRoutes(routes, resolve) {
    const _routes = getRoutes(resolve)
    _routes.forEach((route) => {
      routes.push(route)
    })
  }
}
