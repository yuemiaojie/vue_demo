export const asyncRoutes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      role: [1, 2, 3]
    }
  },
  {
    path: '/home',
    name: '首页',
    meta: {
      title: 'home',
      role: [1, 2, 3]
    },
    component: _ => import('@page'),
    children: [
      {
        path: 'content01',
        redirect: 'content01/content01',
        name: '管理01',
        meta: {
          role: [1, 2, 3],
          submenu: true,
          icon: 'el-icon-menu'
        },
        component: _ => import('@page/transfer'),
        children: [
          {
            path: 'content01',
            name: '内容页01',
            meta: {
              title: 'content01',
              role: [1],
              icon: 'el-icon-s-grid'
            },
            component: _ => import('@page/content01')
          },
          {
            path: 'edit',
            name: '编辑页01',
            meta: {
              title: 'content02',
              role: [2],
              icon: 'el-icon-s-grid'
            },
            component: _ => import('@page/content02')
          }
        ]
      },
      {
        path: 'content03',
        name: '内容页03',
        hidden: true,
        meta: {
          title: 'content03',
          role: [2],
          name: '编辑内容页01',
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
