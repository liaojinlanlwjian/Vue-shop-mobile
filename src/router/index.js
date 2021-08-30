import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from '../views/home/tab.vue'
import Index from '../views/home/index.vue'
import Cart from '../views/home/cart.vue'
import Type from '../views/home/type.vue'
import User from '../views/home/user.vue'
import Login from '../views/login/login.vue'
import Detail from '../views/Buy/detailPage.vue'
import Jiesuan from '../views/Buy/jiesuan.vue'
import Address from '../views/address/address_list.vue'
import Address_add from '../views/address/address_add.vue'
import Address_edit from '../views/address/address_edit.vue'
import Checkout from '../views/Buy/checkout.vue'
import Pay from '../views/Buy/pay.vue'
import Nopay from '../views/Buy/nopay.vue'
import Received from '../views/status/received.vue'
import Unpaid from '../views/status/unpaid.vue'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Tab',
			component: Tab,
			 redirect: '/index',
			children: [{
					path: '/index',
					name: 'index',
					component: Index,
				},
				{
					path: '/user',
					name: 'user',
					component: User,
				},
				{
					path: '/cart',
					name: 'cart',
					component: Cart,
				},
				{
					path: '/type',
					name: 'type',
					component: Type,
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/jiesuan',
			name: 'jiesuan',
			component: Jiesuan,
			meta :{
				keepAlive:true
			}
		},
		{
			path: '/address',
			name: 'address',
			component: Address,
		},
		{
			path: '/pay',
			name: 'pay',
			component: Pay,
		},
		{
			path: '/nopay',
			name: 'nopay',
			component: Nopay,
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: Checkout,
		},
		{
			path: '/received',
			name: 'received',
			component: Received,
		},
		{
			path: '/unpaid',
			name: 'unpaid',
			component: Unpaid,
		},
		{
			path: '/address_add',
			name: 'address_add',
			component: Address_add,
		},
		{
			path: '/address_edit',
			name: 'address_edit',
			component: Address_edit,
		},
		{
			path: '/detail',
			name: 'detail',
			component: Detail,
		}
	]
})
