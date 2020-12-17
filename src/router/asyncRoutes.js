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
          },
          {
            path: 'demo005',
            name: 'demo005',
            meta: {
              title: 'postmate（iframe通信）',
              enTitle: 'demo005',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/postmate（iframe通信）.vue')
          },
          {
            path: 'demo006',
            name: 'demo006',
            meta: {
              title: 'iframe通信',
              enTitle: 'demo006',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/iframe通信.vue')
          },
          {
            path: 'demo007',
            name: 'demo007',
            meta: {
              title: '小数点精度问题',
              enTitle: 'demo007',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/小数点精度问题.vue')
          },
          {
            path: 'demo008',
            name: 'demo008',
            meta: {
              title: 'base64转文件对象',
              enTitle: 'demo008',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/base64转文件对象.vue')
          },
          {
            path: 'demo010',
            name: 'demo010',
            meta: {
              title: 'better-scroll',
              enTitle: 'demo010',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/better-scroll.vue')
          },
          {
            path: 'demo011',
            name: 'demo011',
            meta: {
              title: 'base64编码入门',
              enTitle: 'demo011',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/base64编码入门.vue')
          },
          {
            path: 'demo012',
            name: 'demo012',
            meta: {
              title: 'css的aspect-ratio(横纵比)练习',
              enTitle: 'demo012',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/css的aspect-ratio(横纵比)练习.vue')
          },
          {
            path: 'demo013',
            name: 'demo013',
            meta: {
              title: 'js自定义事件',
              enTitle: 'demo013',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/js自定义事件.vue')
          },
          {
            path: 'demo014',
            name: 'demo014',
            meta: {
              title: 'http与https的原理',
              enTitle: 'demo014',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/http与https的原理.vue')
          },
          {
            path: 'demo015',
            name: 'demo015',
            meta: {
              title: 'dayjs',
              enTitle: 'demo015',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/dayjs.vue')
          },
          {
            path: 'demo016',
            name: 'demo016',
            meta: {
              title: '产生服从均匀分布随机数',
              enTitle: 'demo016',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _ => import('@page/demo/产生服从均匀分布随机数.vue')
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
