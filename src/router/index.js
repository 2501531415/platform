import Vue from 'vue'
import vueRouter from 'vue-router'
// import Layout from '@/layouts'

Vue.use(vueRouter)

export const routes = [
  // {
  //   path:'/',
  //   redirect:'/system/menu'
  // },
  {
    path:"/login",
    name:"登录",
    component:()=>import('@/view/login')
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