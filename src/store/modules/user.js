import {getAccessToken,setAccessToken,removeAccessToken} from '@/utils/accessToken'
import {login} from '@/api/user'

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
	login({commit},payload){
		return new Promise((resolve,reject)=>{
			login(payload).then(res=>{
				console.log(res)
				if(res.code == 200){
					commit('setToken',res.data.token)
					resolve(res)
				}else{
					reject(res)
				}
			}).catch(err=>{
				reject(err)
			})
		})
	},
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