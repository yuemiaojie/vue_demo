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
        component: _ => import('@page/home')
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
        component: _ => import('@page/tinymce')
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
        component: _ => import('@page/svga')
      },
      {
        path: 'excel/:id?',
        name: 'excel',
        meta: {
          title: 'excel',
          enTitle: 'excel',
          role: [1, 2, 3],
          icon: 'icon-excel'
        },
        component: _ => import('@page/excel')
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
        component: _ => import('@page/transfer'),
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
            component: _ => import('@page/summarys')
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
            component: _ => import('@page/Summarys/summarysItem/eventLoop')
          }
        ]
      },
      {
        path: 'demo',
        redirect: 'demo/demos',
        name: 'demo',
        meta: {
          title: '测试',
          enTitle: 'demo',
          role: [1, 2, 3],
          icon: 'icon-ceshi',
          submenu: true
        },
        component: _ => import('@page/transfer'),
        children: [
          {
            path: 'demo001',
            name: 'demo001',
            meta: {
              title: '截取音频',
              enTitle: 'demo001',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/截取音频.vue')
          },
          {
            path: 'demo002',
            name: 'demo002',
            meta: {
              title: 'console的各种API总结',
              enTitle: 'demo002',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/console的各种API总结.vue')
          },
          {
            path: 'demo003',
            name: 'demo003',
            meta: {
              title: 'svg学习',
              enTitle: 'demo003',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/svg学习.vue')
          },
          {
            path: 'demo004',
            name: 'demo004',
            meta: {
              title: '判断utf-8编码格式',
              enTitle: 'demo004',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/判断utf-8编码格式.vue')
          }
        ]
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
    component: resolve => require(['@page/empty'], resolve)
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404',
      enTitle: '404',
      role: [1, 2, 3]
    },
    component: resolve => require(['@page/error/404'], resolve)
  }
]
