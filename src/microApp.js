import { registerMicroApps,start} from 'qiankun'
import nprogress from '@/lib/nprogress'
import globalStore from './store/qiankun'

export function registerMicro(){
  // 注册微应用
  registerMicroApps([
    {
      name: 'vue2',
      entry: 'http://localhost:8881',
      container: '#subapp-viewport',
      activeRule: '#/vue2',
      props: {
        getGlobalState: globalStore.getGlobalState // 下发getGlobalState方法
      }
    }
  ],
  {
    beforeLoad:()=>{
      nprogress.start()
    },
    afterMount:()=>{
      nprogress.done()
    }
  }
  )
  // 启动
  start()
}