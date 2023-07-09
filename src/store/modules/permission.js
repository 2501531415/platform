import {
	getMicroApp,
	filterRoutesForMenu
} from '@/utils/route'
import {
	deepClone
} from '@/utils'
const state = () => ({
	routes: [{
		path: '/system',
		name: '系统管理',
		component: 'LAYOUT',
		meta: {
			title: '系统管理',
			icon: 'el-icon-setting',
		},
		order: 10,
		hidden: false,
		createTime: new Date().getTime(),
		id: 1,
		children: [{
				path: 'http://127.0.0.1:8881/#/system/menu',
				name: '菜单管理',
				meta: {
					title: '菜单管理',
					currentActiveMenu: '/system/menu',
					icon: 'el-icon-eleme',
					isMicro: true
				},
				id: 2,
			},
			{
				path: 'http://127.0.0.1:8881/#/system/role',
				name: '角色管理',
				meta: {
					title: '角色管理',
					currentActiveMenu: '/system/role',
					icon: 'el-icon-eleme',
					isMicro: true
				},
				id: 3,
			}
		],
	}],
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
		const microRoutes = deepClone(state.routes)
		const viewRoutes = deepClone(state.routes)
		state.microApp = getMicroApp(microRoutes)
		state.viewRoutes = filterRoutesForMenu(viewRoutes)
	}
}

const actions = {
	getRoutes({
		commit
	}) {
		commit('setViewRoutes')
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}