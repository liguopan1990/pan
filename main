// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

import Qs from 'qs'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'mint-ui/lib/style.css'
import  { InfiniteScroll, Tabbar, TabItem, Button } from 'mint-ui'

import httpRequest  from  '@/utils/httpRequest'


Vue.config.productionTip = false

Vue.prototype.$http = httpRequest
Vue.prototype.$Qs = Qs


Vue.use(iView)
Vue.use(InfiniteScroll)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Button.name, Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
