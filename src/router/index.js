import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PersonalInfo',
    name: 'PersonalInfo',
    component: () => import('../views/PersonalInfo.vue')
  },
  {
    path: '/Agreement',
    name: 'Agreement',
    component: () => import('../views/Agreement.vue')
  },
  {
    path: '/History',
    name: 'History',
    component: () => import('../views/History.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

