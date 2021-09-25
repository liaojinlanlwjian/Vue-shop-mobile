import request from '../config/request.js'

export function getIcon(){
	return request({ url: '/iconList',method: 'get'})
}
export function getGoods(status){
	return request({ url: '/productList/?shangjia=' + status,method: 'get'});
} 
export function getGoods_type(type){
	return request({ url: '/productList/?type=' + type,method: 'get'});
} 
export function changeGoods(id,params){
	return request({ url: '/productList/' +id,method: 'patch_noqs',data:params})
} 