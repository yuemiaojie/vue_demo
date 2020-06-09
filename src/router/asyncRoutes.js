export const asyncRoutes = [
  {
    path: '/',
    redirect: '/home',
    name: '/',
    meta: {
      title: '管理平台',
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
          icon: 'icon-shouye1'
        },
        component: _ => import('@page/home')
      },
      {
        path: 'tinymce',
        name: 'tinymce',
        meta: {
          title: '富文本',
          role: [1, 2, 3],
          icon: 'icon-ai-edit'
        },
        component: _ => import('@page/tinymce')
      },
      {
        path: 'svga',
        name: 'svga',
        meta: {
          title: 'svga',
          role: [1, 2, 3],
          icon: 'icon-svg'
        },
        component: _ => import('@page/svga')
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
