export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      enTitle: 'login',
      id: '0',
      notRequiresAuth: true
    },
    component: resolve => require(['@page/login'], resolve)
  }
]
