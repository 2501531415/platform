import router from '@/router'
import store from './store'
import nprogress from '@/lib/nprogress'
import {registerMicro} from './microApp'
import globalStore from './store/qiankun'

router.beforeResolve(async (to,form,next)=>{
  if(nprogress) nprogress.start()
  const routes = store.getters['permission/getViewRoutes']
  if(routes.length == 0){
    await store.dispatch('permission/getRoutes')
    const microApp = store.getters['permission/getMicroApp']
    const routes = store.getters['permission/getViewRoutes']
    store.dispatch('tabsView/setBreadcrumb',{routes,path:to.path})
    store.dispatch('tabsView/initVisitedRoute',{routes,path:to.path})
    // 执行qiankun
    registerMicro(microApp)
  }
  next()
})

router.afterEach(()=>{
  nprogress.done()
})