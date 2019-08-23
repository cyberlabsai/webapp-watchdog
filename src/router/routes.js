
const routes = [
  {
    path: '/',
    component: () => import('../components/templates/GigerCounter.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
