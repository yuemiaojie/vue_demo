export const asyncRoutes = [
  {
    path: '/',
    redirect: '/home',
    name: '/',
    meta: {
      title: '管理平台',
      enTitle: 'management platform',
      role: [1, 2, 3]
    },
    component: _ => import('@page'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
          enTitle: 'home',
          role: [1, 2, 3],
          icon: 'icon-shouye1'
        },
        component: _ => import('@page/Home')
      },
      {
        path: 'tinymce',
        name: 'tinymce',
        meta: {
          title: '富文本',
          enTitle: 'RichText',
          role: [1, 2, 3],
          icon: 'icon-ai-edit'
        },
        component: _ => import('@page/Tinymce')
      },
      {
        path: 'svga',
        name: 'svga',
        meta: {
          title: 'svga',
          enTitle: 'svga',
          role: [1, 2, 3],
          icon: 'icon-svg'
        },
        component: _ => import('@page/Svga')
      },
      {
        path: 'excel',
        name: 'excel',
        meta: {
          title: 'excel',
          enTitle: 'excel',
          role: [1, 2, 3],
          icon: 'icon-excel'
        },
        component: _ => import('@page/Excel')
      },
      {
        path: 'summary',
        redirect: 'summary/summarys',
        name: 'summary',
        meta: {
          title: '摘要总结',
          enTitle: 'summary',
          role: [1, 2, 3],
          icon: 'icon-ceshi',
          submenu: true
        },
        component: _ => import('@page/Transfer'),
        children: [
          {
            path: 'summarys',
            name: 'summarys',
            meta: {
              title: '摘要列表',
              enTitle: 'summarys',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/Summarys')
          },
          {
            path: 'event-loop',
            name: 'event-loop',
            meta: {
              title: '什么是Event Loop',
              enTitle: 'What is an event loop',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/Summarys/SummarysItem/EventLoop')
          }
        ]
      },
      {
        path: 'demo',
        name: 'demo',
        meta: {
          title: 'demo',
          enTitle: 'demo',
          role: [1, 2, 3],
          icon: 'icon-ceshi'
        },
        component: _ => import('@page/Demo')
      }
    ]
  },
  {
    path: '/empty',
    name: 'empty',
    meta: {
      title: '',
      enTitle: '',
      role: [1, 2, 3]
    },
    component: resolve => require(['@page/Empty'], resolve)
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404',
      enTitle: '404',
      role: [1, 2, 3]
    },
    component: resolve => require(['@page/Error/404'], resolve)
  }
]
