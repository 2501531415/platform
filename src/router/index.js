import Vue from 'vue'
import vueRouter from 'vue-router'
import {errorPath} from '@/setting'
// import Layout from '@/layouts'

Vue.use(vueRouter)

export const routes = [
  {
    path:"/login",
    name:"登录",
    component:()=>import('@/view/login')
  },
  {
    path:errorPath,
    name:'404',
    component:()=>import('@/view/error/404.vue'),
    meta:{
      title:'404'
    },
  }
]

const router = new vueRouter({
  routes
})

const routerPush = vueRouter.prototype.push;
vueRouter.prototype.push = function (location) {
  return routerPush.call(this, location).catch(err => {})
};

export default router