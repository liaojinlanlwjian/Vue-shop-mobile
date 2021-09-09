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
import Pinjia from '../views/status/pinjia.vue'
import Daipinjia from '../views/status/daipjia.vue'
import Allpo from '../views/status/allpo.vue'
import Balance from '../views/active/balance.vue'
import Point from '../views/active/point.vue'
import Ticket from '../views/active/ticket.vue'
import Youhui from '../views/active/youhui.vue'
import Search from '../views/search/search.vue'
import SearchPage from '../views/search/searchpage.vue'
import Member from '../views/member/member.vue'
import Checkout_member from '../views/member/checkout_member.vue'
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
					meta: {
					        keepAlive: true // 需要缓存
					      }
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
			path: '/balance',
			name: 'balance',
			component: Balance,
		},
		{
			path: '/ticket',
			name: 'ticket',
			component: Ticket,
		},
		{
			path: '/youhui',
			name: 'youhui',
			component: Youhui,
		},
		{
			path: '/search',
			name: 'search',
			component: Search,
		},
		{
			path: '/searchpage',
			name: 'searchpage',
			component: SearchPage,
		},
		{
			path: '/member',
			name: 'member',
			component: Member,
		},
		{
			path: '/checkout_member',
			name: 'checkout_member',
			component: Checkout_member,
		},
		{
			path: '/point',
			name: 'point',
			component: Point,
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
			path: '/pinjia',
			name: 'pinjia',
			component: Pinjia,
		},
		{
			path: '/allpo',
			name: 'allpo',
			component: Allpo,
		},
		{
			path: '/daipinjia',
			name: 'daipinjia',
			component: Daipinjia,
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
		},
		    {
		      path: '**',   // 错误路由
		      redirect: '/index'   //重定向
		    },
	],
	 mode: 'history',
	  scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
	      return savedPosition
	    } else {
	      return { x: 0, y: 0 }
	    }
	  }
})
