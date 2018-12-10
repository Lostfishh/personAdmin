export default [
  {
    path: 'login',
    component: require('@/module/login/login').default
  },
  {
    path: 'forgetpw',
    component: require('@/module/login/forget-password').default
  },
  {
    path: 'resetpw',
    component: require('@/module/login/reset-password').default
  }
]
