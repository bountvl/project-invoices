import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../views/LoginView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },  
  {
    path: '/customers',
    name: 'customers',
    component: () => import('../views/CustomersView.vue')
  },  
  {
    path: '/currency',
    name: 'currency',
    component: () => import('../views/CurrencyView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
