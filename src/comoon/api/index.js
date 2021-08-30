import request from '../config/request.js'

export function getIcon(){
	return request({ url: '/iconList',method: 'get'})
}
export function getGoods(){
	return request({ url: '/productList',method: 'get'});
} 