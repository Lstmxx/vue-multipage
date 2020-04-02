import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/city-list',
    component: Main
  },
  {
    path: '',
    name: '',
    component: Main,
    children: [
      {
        path: '/city-list',
        name: 'CityList',
        component: () => import(/* webpackChunkName: "city-list" */ '../views/city-list/index')
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
