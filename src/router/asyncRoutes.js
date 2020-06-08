export const asyncRoutes = [
  {
    path: '/',
    redirect: '/home',
    name: '管理平台',
    meta: {
      role: [1, 2, 3]
    },
    component: _ => import('@page'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
          role: [1, 2, 3],
          icon: 'el-icon-s-home'
        },
        component: _ => import('@page/home')
      },
      {
        path: 'content01',
        redirect: 'content01/content01',
        name: 'content01',
        meta: {
          role: [1, 2, 3],
          submenu: true,
          icon: 'el-icon-menu'
        },
        component: _ => import('@page/transfer'),
        children: [
          {
            path: 'content001',
            name: 'content001',
            meta: {
              title: '内容页01',
              role: [1],
              icon: 'el-icon-s-grid'
            },
            component: _ => import('@page/content01')
          },
          {
            path: 'edit',
            name: 'edit',
            meta: {
              title: '编辑页01',
              role: [2],
              icon: 'el-icon-s-grid'
            },
            component: _ => import('@page/content02')
          }
        ]
      },
      {
        path: 'content03',
        name: 'content03',
        hidden: true,
        meta: {
          title: '内容页03',
          role: [2],
          icon: 'el-icon-s-grid'
        },
        component: _ => import('@page/content03')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404',
      id: '1',
      role: [1, 2, 3]
    },
    component: resolve => require(['@page/error/404'], resolve)
  }
]
