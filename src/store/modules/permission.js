import {
	getMicroApp,
	filterRoutesForMenu
} from '@/utils/route'
import {getRouter} from '@/api/user'
import {
	deepClone
} from '@/utils'
const state = () => ({
	routes: [],
	viewRoutes: [], //菜单
	microApp: [] //微应用
})

const getters = {
	getRouter: (state) => state.routes,
	getViewRoutes: (state) => state.viewRoutes,
	getMicroApp: (state) => state.microApp
}

const mutations = {
	setViewRoutes(state, payload) {
		const microRoutes = deepClone(payload)
		const viewRoutes = deepClone(payload)
		state.microApp = getMicroApp(microRoutes)
		state.viewRoutes = filterRoutesForMenu(viewRoutes)
	},
	removeRoutes(state){
		state.routes = []
	}
}

const actions = {
	getRoutes({
		commit
	}) {
		return new Promise((resolve)=>{
			getRouter().then(res=>{
				commit('setViewRoutes',res.data)
				resolve()
			})
		})
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}