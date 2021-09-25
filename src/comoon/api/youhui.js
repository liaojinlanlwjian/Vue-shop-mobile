import request from '../config/request.js'

export function getCoupons(){
	return request({ url: '/couponsList',method: 'get'})
}
export function getCoupons_type(type){
	return request({ url: '/couponsList/?type=' +type,method: 'get'})
}
export function getCoupons_id(id){
	return request({ url: '/usercouponsList/?id=' +id,method: 'get'})
}
export function getCoupons_name(name,status){
	return request({ url: '/usercouponsList/?name=' +name + '&status=' +status ,method: 'get'})
}
export function changeCoupons_status(id,params){
	return request({ url: '/usercouponsList/' +id,method: 'patch',data:params})
}