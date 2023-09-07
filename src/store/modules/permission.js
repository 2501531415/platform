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
	},
	{
		path: '/components',
		name: '组件管理',
		component: 'LAYOUT',
		meta: {
			title: '组件管理',
			icon: 'el-icon-setting',
		},
		order: 20,
		hidden: false,
		createTime: new Date().getTime(),
		id: 4,
		children: [{
				path:'/components/editor',
				name: '编辑器',
				meta: {
					title: '编辑器',
					icon: 'el-icon-eleme',
				},
				children: [{
						path: 'http://127.0.0.1:8882/#/components/editor/tinymec',
						name: 'tinymec富文本',
						meta: {
							title: 'tinymec富文本',
							currentActiveMenu: '/components/editor/tinymec',
							icon: 'el-icon-eleme',
							isMicro: true
						},
						id: 6,
					},
					{
						path: 'http://127.0.0.1:8882/#/components/editor/vditor',
						name: 'Markdown编辑器',
						meta: {
							title: 'Markdown编辑器',
							currentActiveMenu: '/components/edit/vditor',
							icon: 'el-icon-eleme',
							isMicro: true
						},
						id: 7,
					}
				],
				id: 5,
			},
			{
				path: 'http://127.0.0.1:8882/#/components/countTo',
				name: '数字滚动器',
				meta: {
					title: '数字滚动器',
					currentActiveMenu: '/components/countTo',
					icon: 'el-icon-eleme',
					isMicro: true
				},
				id: 8,
			},
			{
				path: 'http://127.0.0.1:8882/#/components/cropper',
				name: '数字滚动器',
				meta: {
					title: '图片裁剪cropper',
					currentActiveMenu: '/components/cropper',
					icon: 'el-icon-eleme',
					isMicro: true
				},
				id: 9,
			}
		],
	}
	],
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