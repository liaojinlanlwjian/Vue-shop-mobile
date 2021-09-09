import request from '../config/request.js'

export function getLogin(name){
	return request({ url: '/userList/?name=' + name,method: 'get'})
}
export function getUser(id){
	return request({ url: '/userList/?id=' + id,method: 'get'})
}
export function getEnroll(params){
	return request({ url: '/userList',method: 'post',data:params});
} 
export function changeUser(id,params){
	return request({ url: '/userList/' + id,method: 'patch',data:params});
}