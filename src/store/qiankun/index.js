import Vue from 'vue'
import { initGlobalState } from 'qiankun';

const initState = Vue.observable({
  itemId:27,
  user:{
    userName:'zwm',
    token:'03779958-3c06-46e9-bf87-8021bb31760f'
  }
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