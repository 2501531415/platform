const Layout = () => import('@/layouts')

// 获取组件文件
function getView(view) {
	if (view == 'Layout') return Layout
	return () => import(view)
}

// 根据菜单生成所有微应用地址(hash)
export function getMicroApp(routes) {
	let micro = []
	routes.forEach(route => {
		if (route.meta.isMicro) {
			const path = route.path.split('#')
			const activeRule = path[1].split('/')[1]
			const origin = path[0]
			if (!micro.some(item => item.entry == origin)) {
				micro.push({
					entry: origin,
					activeRule,
				})
			}
		}
		if (route.children && route.children.length) {
			micro = micro.concat(getMicroApp(route.children))
		}
	})
	return micro
}

// 整理菜单数据,生成路由菜单 @view/system/index
export function filterRoutesForMenu(routes) {
	const menu = routes.filter(route => !route.hidden)
	menu.forEach(route => {
		if (route.meta.isMicro) {
			route.path = route.path.split('#')[1]
		} else if (route.path && route.component) {
			route.component = getView(route.component)
		}
		if (route.children && route.children.length) {
			filterRoutesForMenu(route.children)
		}
	})
	return menu
}

//从路由中获取面包屑数据
export function findBreadcrumb(routes, path) {
	let arr = [];
	routes.forEach((route, index) => {
		arr.push(route)
		if (route.children && route.children.length) {
			arr = arr.concat(findBreadcrumb(route.children, path))
		}
		if (index == routes.length - 1) {
			const paths = arr.map(item => item.path)
			if (!paths.includes(path)) {
				arr = []
			}
		}
	})
	return arr
}
//根据path找父菜单
export function findRoute(routes, path, parent = null) {
	let arr;
	routes.forEach(route => {
		if (!arr) {
			if (route.path == path) {
				arr = parent ? parent : route
			} else if (route.children && route.children.length) {
				arr = findRoute(route.children, path, parent ? parent : route)
			}
		}
	})
	return arr
}

//根据path找路由信息

export function findRouteInfo(routes, path) {
	let info;
	routes.forEach(route => {
		if (!info) {
			if (route.path == path) {
				info = route
			} else if (route.children && route.children.length) {
				info = findRouteInfo(route.children, path)
			}
		}
	})
	return info
}

// 获取路由菜单的第一个菜单
export function findFirstRoute(routes){
	let firstRoute;
	routes.forEach((route,index)=>{
		if(index == 0){
			if(route.children && route.children.length > 0){
				firstRoute = findFirstRoute(route.children)
			}else{
				firstRoute = route
			}
		}
	})
	return firstRoute
}