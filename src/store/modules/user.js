import {getAccessToken,setAccessToken,removeAccessToken} from '@/utils/accessToken'

const state = () => ({
	token: getAccessToken()
})

const getters = {
	getToken:(state)=>state.token
}
const mutations = {
	setToken(state, payload) {
		state.token = payload
		setAccessToken(payload)
	},
	removeToken(state,payload){
		state.token = null
		removeAccessToken()
	}
}

const actions = {
	logout({commit}){
		commit('removeToken')
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}