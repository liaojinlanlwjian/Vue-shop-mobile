import request from '../config/request.js'

export function getAddress(user){
	return request({ url: '/addressList/?username=' + user,method: 'get'})
}
export function addAddress(params){
	return request({ url: '/addressList',method: 'post',data:params});
} 
export function changeAddress(id,params){
	return request({ url: '/addressList/' +id,method: 'patch',data:params})
}
export function delAddress(id){
	return request({ url: '/addressList/' + id,method: 'delete'})
}
export function getAddress_one(idid){
	return request({ url: '/addressList/?id=' + idid,method: 'get'})
}