// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

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
    component: _import('login')
  }
]
