import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index.js'
import api from './api'
import backToTop from '@/components-config/back-top'
import * as filters from '@/filters/filters'
import utils from '@utils'
import log from '@utils/log'
import cookie from 'js-cookie'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import VueI18n from 'vue-i18n'
import moment from 'moment'
import Directives from '@/directives'
// import loading from '@/components-config/loading'
import Upload from '@/components-config/upload'
import { resetRouter } from '@router'
// import Mock from 'mockjs'
// console.log()

NProgress.configure({ showSpinner: false })
// 全局filter
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
// 主题换肤
import { initThemeColor } from './utils/themeColorClient'
initThemeColor()

const setCookies = {
  userInfo: function () {
    store.commit('user/SET_USERINFO', JSON.parse(cookie.get('userInfo')))
    store.commit('permission/GENERATE_ROUTES', JSON.parse(userInfo).roles)
    const addRoutes = store.getters.addRoutes
    router.addRoutes(addRoutes)
  },
  sidebarStatus: function () {
    store.commit('settings/SET_SETTINGS', { key: 'sidebarStatus', val: cookie.get('sidebarStatus') })
  },
  language: function () {
    store.commit('settings/SET_SETTINGS', { key: 'language', val: cookie.get('language') })
  }
}

const valiCookie = function (value, key) {
  if (!value || !utils.hasOwn(setCookies, key)) return

  setCookies[key]()
}

const userInfo = cookie.get('userInfo')
const sidebarStatus = cookie.get('sidebarStatus')
const language = cookie.get('language')

valiCookie(userInfo, 'userInfo')
valiCookie(sidebarStatus, 'sidebarStatus')
valiCookie(language, 'language')

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.notRequiresAuth) {
    next()
  } else {
    const userInfo = cookie.get('userInfo')
    if (userInfo && utils.getType(JSON.parse(userInfo)) === 'obj' && userInfo !== '{}') {
      next()
    } else {
      next('/login')
      cookie.remove('userInfo')
      store.commit('permission/DESTROY_ROUTES')
      store.commit('user/SET_USERINFO', {})
      resetRouter()
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
  document.title = store.getters.language === 'zh' ? to.meta.title : to.meta.enTitle
})

// 注册组件
Vue.use(backToTop)
Vue.use(ELEMENT)
Vue.use(VueI18n)
Vue.use(Directives)
Vue.use(Upload)
// Vue.use(loading)
const i18n = new VueI18n({
  locale: store.getters.language,
  messages: {
    'zh': require('@lang/zh'),
    'en': require('@lang/en')
  }
})
const { Loading, Message } = ELEMENT
// 绑定全局
Vue.prototype.$api = api
Vue.prototype.$utils = utils
Vue.prototype.$msg = opt => Message(opt)
Vue.prototype.$loading =
  _ => Loading.service({
    lock: true,
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.5)'
  })
Vue.prototype.$moment = moment
Vue.prototype.$log = log

// 禁止生产提示
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
