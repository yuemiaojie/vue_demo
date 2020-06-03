export const constantRoutes = [
  {
    path: '/login',
    name: '登录页',
    meta: {
      title: 'login',
      id: '0',
      notRequiresAuth: true
    },
    component: resolve => require(['@page/login'], resolve)
  }
]
