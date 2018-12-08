import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/module/login').default,
      children: require('@/router/login.js').default,
      redirect: '/login/login'
    }
  ]
})
