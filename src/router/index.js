import Vue from 'vue'
import vueRouter from 'vue-router'
// import Layout from '@/layouts'

Vue.use(vueRouter)

export const routes = [
  {
    path:"/login",
    name:"登录",
    component:()=>import('@/view/login')
  }
]

const router = new vueRouter({
  routes
})

export default router