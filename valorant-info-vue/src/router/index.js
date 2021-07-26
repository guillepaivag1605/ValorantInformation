import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/agentes',
    name: 'Agentes',
    component: () => import('../views/Agentes.vue')
  },
  {
    path: '/mapas',
    name: 'Mapas',
    component: () => import('../views/Mapas.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
