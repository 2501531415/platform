import Vue from 'vue'
import { initGlobalState } from 'qiankun';

const initState = Vue.observable({
  menu:[]
})

// 初始化 state
const actions = initGlobalState(initState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
  
});

actions.getGlobalState = (key)=>{
  return key?initState[key]:initState
}


// actions.setGlobalState(state);

Vue.prototype.$actions = actions

export default actions