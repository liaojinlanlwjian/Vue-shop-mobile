import request from '../config/request.js'

export function getCar(user){
	return request({ url: '/carList/?user=' + user,method: 'get'})
}
export function joinCar(params){
	return request({ url: '/carList',method: 'post',data:params});
} 
export function delCar(id){
	return request({ url: '/carList/' + id,method: 'delete'})
}
export function subPo(params){
	return request({ url: '/goodsList',method: 'post',data:params});
} 