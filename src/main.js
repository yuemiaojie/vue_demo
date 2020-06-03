import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index.js'
import api from './api'
import './style/index.scss'
import backToTop from '@/components_config/backTo_top'
import { appThemeColor } from '@/assets/js/appThemeColor'
import * as filters from '@/filters/filters'
import utils from '@utils'
import cookie from 'js-cookie'
import { Loading, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import Mock from 'mockjs'
// console.log()

NProgress.configure({ showSpinner: false })

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// 主题换肤
import { initThemeColor } from './utils/themeColorClient'
initThemeColor()

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.notRequiresAuth) {
    next()
  } else {
    const userInfo = cookie.get('userInfo')
    if (userInfo) {
      if (JSON.parse(userInfo)) {
        store.commit('settings/SET_SETTINGS', { key: 'sidebarStatus', val: cookie.get('sidebarStatus') })
        store.commit('user/SET_USERINFO', JSON.parse(cookie.get('userInfo')))
        if (store.getters.addRoutes.length === 0) {
          store.commit('permission/GENERATE_ROUTES', JSON.parse(userInfo).roles)
          const addRoutes = store.getters.addRoutes
          router.addRoutes(addRoutes)
          next({ ...to, replace: true })
        } else {
          next()
        }
      }
    } else {
      next('/login')
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
  document.title = to.name
})

// 注册组件
Vue.use(backToTop)

// 绑定全局
Vue.prototype.$appThemeColor = appThemeColor
Vue.prototype.$api = api
Vue.prototype.$utils = utils
Vue.prototype.$msg = opt => Message(opt)
Vue.prototype.$loading =
  _ => Loading.service({
    lock: true,
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.5)'
  })

// 禁止生产提示
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
