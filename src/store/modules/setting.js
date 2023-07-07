const state = ()=>({
  collapse:false
})

const getters = {
  getCollapse(state){
    return state.collapse
  }
}
const mutations = {
  changeCollapse(state,payload){
    state.collapse = payload
  }
}

export default {
  namespaced:true,
  state,
  getters,
  mutations
}
