import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/find-house',
    component: Main
  },
  {
    path: '',
    name: '',
    component: Main,
    children: [
      {
        path: '/find-house',
        name: 'FindHouse',
        component: () => import(/* webpackChunkName: "find-house" */ '../views/find-house/index')
      }
    ]
  },
  {
    path: '',
    name: '',
    component: Main,
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import(/* webpackChunkName: "find-house" */ '../views/user/index')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
