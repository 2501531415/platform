 import router from '@/router'
import store from './store'
import nprogress from '@/lib/nprogress'
import {registerMicro} from './microApp'
import {findFirstRoute} from '@/utils/route'

router.beforeResolve(async (to,form,next)=>{
  const whileList = ['/login']
  const token = store.getters['user/getToken']
  const routes = store.getters['permission/getViewRoutes']
  if(nprogress) nprogress.start()
  if(token){
    if(routes.length == 0){
      await store.dispatch('permission/getRoutes')
      const microApp = store.getters['permission/getMicroApp']
      const routes = store.getters['permission/getViewRoutes']

      store.dispatch('tabsView/setBreadcrumb',{routes,path:to.path})
      store.dispatch('tabsView/initVisitedRoute',{routes,path:to.path})
      
      const firstRoute = findFirstRoute(routes)
      store.commit('tabsView/setFirstRoutePath',firstRoute.path) // 保存进入系统初始页
      router.addRoutes([{
        path:'/',
        redirect: firstRoute.path
      },{
        path:firstRoute.path,
        name:firstRoute.name,
        meta:firstRoute.meta,
      }])

      // 执行qiankun
      registerMicro(microApp)
      return next({path:to.path})
    }
    next()
  }else{
    if(whileList.includes(to.path)){
      next()
    }else{
      next('/login')
    }
  }
  
  
})

router.afterEach(()=>{
  nprogress.done()
})