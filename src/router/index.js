import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../views/LoginView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      requiresAuth:true
    }
  },  
  {
    path: '/customers',
    name: 'customers',
    component: () => import('../views/CustomersView.vue'),
    meta:{
      requiresAuth:true
    }
  },  
  {
    path: '/currency',
    name: 'currency',
    component: () => import('../views/CurrencyView.vue'),
    meta:{
      requiresAuth:true
    }
  },  
  {
    path: '/company',
    name: 'company',
    component: () => import('../views/CompanyView.vue'),
    meta:{
      requiresAuth:true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  // const auth = to.meta.requiresAuth
  // const token = localStorage.getItem('token')
  // if(!token && auth){
  //   next("/")
  // }
  // if(token && auth){
  //   next("/home")
  // }
console.log(localStorage.getItem('token'))

  if(to.meta.requiresAuth && !localStorage.getItem('token')){
    next('/')
  }
  else if(to.meta.requiresAuth == false  && localStorage.getItem('token')){
    next('/home')
  }else{
    next
  }
   next()
})


export default router
