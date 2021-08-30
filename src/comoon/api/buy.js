import request from '../config/request.js'

export function getAddress(user){
	return request({ url: '/addressList/?username=' + user,method: 'get'})
}
export function getpay(user,status){
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
export function getAddress_one(idid){
	return request({ url: '/addressList/?id=' + idid,method: 'get'})
}