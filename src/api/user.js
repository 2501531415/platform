import {request} from '@/utils/http'

export function login(data){
  return request({
    url:'/user/login',
    method:'post',
    data
  })
}

export function getRouter(){
  return request({
    url:'/user/getRouter',
    method:'get'
  })
}

