// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

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
    component: _import('index'),
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
        component: _import('home')
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
        component: _import('tinymce')
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
        component: _import('svga')
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
        component: _import('excel')
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
        component: _import('transfer'),
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
            component: _import('summarys')
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
            component: _import('summarys/summarysItem/eventLoop')
          },
          {
            path: 'aaa/:id?',
            name: 'aaa',
            meta: {
              title: 'aaa',
              enTitle: 'aaa',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _import('summarys/summarysItem/aaa')
          }
        ]
      },
      {
        path: 'demo',
        redirect: 'demo/demo001',
        name: 'demo',
        meta: {
          title: '测试',
          enTitle: 'demo',
          role: [1, 2, 3],
          icon: 'icon-ceshi',
          submenu: true
        },
        component: _import('transfer'),
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
            component: _import('demo/截取音频')
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
            component: _import('demo/console的各种API总结')
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
            component: _import('demo/svg学习')
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
            component: _import('demo/判断utf-8编码格式')
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
            component: _import('demo/postmate（iframe通信）')
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
            component: _import('demo/iframe通信')
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
            component: _import('demo/小数点精度问题')
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
            component: _import('demo/base64转文件对象')
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
            component: _import('demo/better-scroll')
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
            component: _import('demo/base64编码入门')
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
            component: _import('demo/css的aspect-ratio(横纵比)练习')
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
            component: _import('demo/js自定义事件')
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
            component: _import('demo/http与https的原理')
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
            component: _import('demo/dayjs')
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
            component: _import('demo/产生服从均匀分布随机数')
          },
          {
            path: 'demo017',
            name: 'demo017',
            meta: {
              title: 'vue自定义事件的绑定',
              enTitle: 'demo017',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _import('demo/vue自定义事件的绑定')
          },
          {
            path: 'demo018',
            name: 'demo018',
            meta: {
              title: 'map标签学习（图像热点）',
              enTitle: 'demo018',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _import('demo/map标签学习（图像热点）')
          },
          {
            path: 'demo019',
            name: 'demo019',
            meta: {
              title: 'vue实现抽奖功能（大转盘）',
              enTitle: 'demo019',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _import('demo/vue实现抽奖功能（大转盘）')
          },
          {
            path: 'demo020',
            name: 'demo020',
            meta: {
              title: '打印封装',
              enTitle: 'demo020',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _import('demo/打印封装')
          },
          {
            path: 'demo021',
            name: 'demo021',
            meta: {
              title: 'vue实现抽奖功能（九宫格）',
              enTitle: 'demo021',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _import('demo/vue实现抽奖功能（九宫格）')
          },
          {
            path: 'demo022',
            name: 'demo022',
            meta: {
              title: 'require与import语法',
              enTitle: 'demo022',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _import('demo/require与import语法')
          },
          {
            path: 'demo023',
            name: 'demo023',
            redirect: 'demo023/demo023-1',
            meta: {
              title: '开发模式总结',
              enTitle: 'demo023',
              role: [1, 2, 3],
              icon: 'icon-ceshi',
              submenu: true
            },
            component: _import('transfer'),
            children: [
              {
                path: 'demo023-1',
                name: 'demo023-1',
                meta: {
                  title: '策略模式',
                  enTitle: 'demo023-1',
                  role: [1, 2, 3],
                  icon: 'icon-ceshi'
                },
                component: _import('demo/开发模式总结/策略模式')
              },
              {
                path: 'demo023-2',
                name: 'demo023-2',
                meta: {
                  title: '设计模式',
                  enTitle: 'demo023-2',
                  role: [1, 2, 3],
                  icon: 'icon-ceshi'
                },
                component: _import('demo/开发模式总结/设计模式')
              }
            ]
          },
          {
            path: 'demo024',
            name: 'demo024',
            meta: {
              title: '城市选择',
              enTitle: 'demo024',
              role: [1, 2, 3],
              icon: 'icon-ceshi'
            },
            component: _import('demo/城市选择')
          }
        ]
      },
      {
        path: 'empty',
        name: 'empty',
        hidden: true,
        meta: {
          title: '',
          enTitle: '',
          role: [1, 2, 3]
        },
        component: resolve => require(['@page/empty'], resolve)
      }
    ]
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
