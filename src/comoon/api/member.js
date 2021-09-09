import request from '../config/request.js'

export function getmemberMsg(){
	return request({ url: '/memberMsg',method: 'get'})
}
export function getmemberMsg_one(id){
	return request({ url: '/userList/?id=' + id,method: 'get'})
}