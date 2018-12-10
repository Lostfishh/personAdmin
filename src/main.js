// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/style/index.less'
// import iView from '@/config/index'
import iView from 'iview'
import axios from '@/config/http'
// import VueAxios from 'axios'
import util from '@/util/index'
// import filter from '@/config/filter'
import store from './store'

// Vue.use(axios)
Vue.use(iView)

Vue.prototype.$util = util
Vue.prototype.$axios = axios

Vue.config.productionTip = false

const directives = require.context('./directives')
directives.keys().forEach(key => {
  const directive = directives(key)
  directive.default(Vue)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
