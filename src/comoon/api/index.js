import request from '../config/request.js'

export function getIcon(){
	return request({ url: '/iconList',method: 'get'})
}
export function getGoods(){
	return request({ url: '/productList',method: 'get'});
} 
export function getGoods_type(type){
	return request({ url: '/productList/?type=' + type,method: 'get'});
} 