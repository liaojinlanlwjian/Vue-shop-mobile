import request from '../config/request.js'

export function patchPo(id,params){
	return request({ url: '/buyList/' +id,method: 'patch',data:params})
}
export function getpay(user,status){
	return request({ url: '/buyList/?username=' + user +'&status=' + status,method: 'get'})
}
export function getdonepay(user,status){
	return request({ url: '/buyList/?username=' + user +'&status=' + status,method: 'get'})
}
export function addBuy(params){
	return request({ url: '/buyList',method: 'post_noqs',data:params});
} 
export function patchstatus(id,params){
	return request({ url: '/buyList/' +id,method: 'patch',data:params})
}
export function changeAddress(id,params){
	return request({ url: '/addressList/' +id,method: 'patch',data:params})
}
export function delpay(id){
	return request({ url: '/buyList/' + id,method: 'delete'})
}
export function addPinjia(params){
	return request({ url: '/pinjiaList',method: 'post',data:params});
} 
export function getpinjia(user,status){
	return request({ url: '/pinjiaList/?user=' + user +'&status=' + status,method: 'get'})
}
export function patchpinjia(id,params){
	return request({ url: '/pinjiaList/' +id,method: 'patch',data:params})
}
export function delpinjia(id){
	return request({ url: '/pinjiaList/' + id,method: 'delete'})
}