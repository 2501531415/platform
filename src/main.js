import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router'
import store from './store'

//全局样式
import '@/assets/styles/global.scss'

// element-ui
import 'element-ui/lib/theme-chalk/index.css';

// 路由权限
import './permission'

// mock
import '../mock/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

setTimeout(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
}, 1000);

