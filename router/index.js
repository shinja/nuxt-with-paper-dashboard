import { getRoutes } from './routes'

export default {
  // routeNameSplitter: '/',
  extendRoutes(routes, resolve) {
    const _routes = getRoutes(resolve)
    _routes.forEach((route) => {
      routes.push(route)
    })
  }
}
