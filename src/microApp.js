import { registerMicroApps,start} from 'qiankun'
import nprogress from '@/lib/nprogress'
import globalStore from './store/qiankun'
import store from './store'

function dealMicroApp(microApp){
  return microApp.map(micro=>{
    return {
      name: micro.activeRule,
      entry: micro.entry,
      container: '#subapp-viewport',
      activeRule: `#/${micro.activeRule}`,
      props: {
        getGlobalState: globalStore.getGlobalState // 下发getGlobalState方法
      }
    }
  })
}

export function registerMicro(microApp){
  // 注册微应用
  registerMicroApps(dealMicroApp(microApp),
  {
    beforeLoad:()=>{
      nprogress.start()
    },
    afterMount:()=>{
      // 菜单
      const menu = store.getters['permission/getRouter']
      globalStore.setGlobalState({
        menu
      })
      nprogress.done()
    }
  }
  )
  // 启动
  start()
}
