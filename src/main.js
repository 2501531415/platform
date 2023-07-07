import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router'
import store from './store'
import {registerMicro} from './microApp'

//全局样式
import '@/assets/styles/global.scss'

// element-ui
import 'element-ui/lib/theme-chalk/index.css';

// 路由权限
import './permission'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 执行qiankun
registerMicro()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

