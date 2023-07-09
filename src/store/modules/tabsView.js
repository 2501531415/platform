import {findRoute,findBreadcrumb,findRouteInfo} from '@/utils/route'
const state = () => ({
  visitedRoutes: [],
  breadcrumb:[]
})
const getters = {
  visitedRoutes: (state) => state.visitedRoutes,
  getBreadcrumb: (state) => state.breadcrumb
}
const mutations = {
  //面包屑
  setBreadcrumb(state, payload) {
    const matched = findRoute(payload.routes, payload.path)
    const breadcrumb = findBreadcrumb([matched], payload.path).filter(item => {
      return item.children || item.path == payload.path
    })
    state.breadcrumb = breadcrumb
  },
  addVisitedRoute(state, route) {
    let target = state.visitedRoutes.find((item) => item.path === route.path)
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route)
      return
    }
    state.visitedRoutes.push(Object.assign({}, route))
  },
  delVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1)
    })
  },
  delOthersVisitedRoute(state, route) {
    state.visitedRoutes = state.visitedRoutes.filter(
      (item) => item.meta.affix || item.path === route.path
    )
  },
  delLeftVisitedRoute(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item)
    })
  },
  delRightVisitedRoute(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item)
    })
  },
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => item.meta.affix)
  },
  updateVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item) => {
      if (item.path === route.path) item = Object.assign(item, route)
    })
  },
}
const actions = {
  setBreadcrumb({
    commit
  }, payload) {
    commit('setBreadcrumb', payload)
  },
  initVisitedRoute({
    commit
  },payload) {
    const route = findRouteInfo(payload.routes,payload.path)
    commit('addVisitedRoute', route)
  },
  addVisitedRoute({
    commit
  }, route) {
    commit('addVisitedRoute', route)
  },
  async delRoute({
    dispatch,
    state
  }, route) {
    await dispatch('delVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  delVisitedRoute({
    commit,
    state
  }, route) {
    commit('delVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  async delOthersRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delOthersVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  async delLeftRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delLeftVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  async delRightRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delRightVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  delOthersVisitedRoute({
    commit,
    state
  }, route) {
    commit('delOthersVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  delLeftVisitedRoute({
    commit,
    state
  }, route) {
    commit('delLeftVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  delRightVisitedRoute({
    commit,
    state
  }, route) {
    commit('delRightVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  async delAllRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delAllVisitedRoutes', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  delAllVisitedRoutes({
    commit,
    state
  }) {
    commit('delAllVisitedRoutes')
    return [...state.visitedRoutes]
  },
  updateVisitedRoute({
    commit
  }, route) {
    commit('updateVisitedRoute', route)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}