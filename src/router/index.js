import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/SystemHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/system',
    name: 'SystemHome',
    component: () => import('@/views/system-admin/SystemHome.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
