import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Login from '../views/Login/Login.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
