export const getRoutes = (resolve) => {
  return [
    {
      path: '*',
      name: 'not-found',
      component: resolve(__dirname, '../', 'pages/NotFoundPage.vue')
    }
  ]
}
