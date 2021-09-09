import request from '../config/request.js'

export function patchPo(id,params){
	return request({ url: '/spendList/' +id,method: 'patch',data:params})
}
export function getpay(user,status){
	return request({ url: '/spendList/?username=' + user +'&status=' + status,method: 'get'})
}
export function addSpend(id,params){
	return request({ url: '/userList/' +id,method: 'patch_noqs',data:params});
} 
export function addSpend_goods(id,params){
	return request({ url: '/userList/' +id,method: 'patch_noqs',data:params});
}