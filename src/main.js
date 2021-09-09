// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Lazyload } from 'vant'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import { Dialog } from 'vant'
import { Notify } from 'vant'
Vue.use(Dialog)
Vue.use(VueCookies)
Vue.use(Lazyload)
Vue.use(Vant)
Vue.use(Notify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
  components: { App },
  template: '<App/>'
})
