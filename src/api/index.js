import axios from 'axios'
import Qs from 'qs'
import baseURL from './config/base'
// import router from '@router'
import get from './http_methods/get'
import post from './http_methods/post'
// import cookie from 'js-cookie'
// import { resetRouter } from '@router'
// import store from '@store'
// import { Message } from 'element-ui'

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 1 * 10000
// 定义axios访问的api集合
window._axiosPromiseArr = []

// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.headers.isEmpty) {
      config.baseURL = '/my_api/'
    }
    // 是否为请求
    var isRequest = true
    var requestTime = new Date().getTime()
    // 如果你为get请求，添加一个随机数
    if (config.method === 'get') {
      config.params = { ...config.params, clearCache: new Date().getTime() }
    } else {
      // 否则如果你为formData形式的参数则请求类型为formData
      if (Object.prototype.toString.call(config.params) === '[object FormData]') {
        console.log('数据类型', Object.prototype.toString.call(config.params))
      } else {
        // 其余请求类型都为application/json
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      }
    }
    // 获取请求参数
    const requestData = getRequestIdentify({ ...config, isRequest })
    // 如果这次请求与上一次请求一样切间隔小于300ms则拦截上一次请求
    removePeeding(requestData, isRequest, requestTime)
    // 保存该请求至`window._axiosPromiseArr`上
    config.cancelToken = new axios.CancelToken(cancel => window._axiosPromiseArr.push({ requestData, cancel, requestTime }))
    // 每次请求发送token
    config.headers['Authorization'] = window.localStorage.getItem('token')
    return config
  },
  error => Promise.error(error)
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    const requestData = getRequestIdentify(response.config)
    removePeeding(requestData)
    if (response.status === 200) {
      // return Promise.resolve(response.data || response)
      return Promise.resolve(response)
      // switch (response.data.code) {
      //   case 200:
      //     return Promise.resolve(response.data)
      //   case 401:
      //     // 如果验证信息失效，则跳转至登录页重新获取登录信息，取消、删除正在请求的所有的接口
      //     window._axiosPromiseArr.forEach((v, i) => {
      //       v.cancel()
      //       delete window._axiosPromiseArr[i]
      //     })
      //     router.push('/login')
      //     cookie.remove('userInfo')
      //     store.commit('permission/DESTROY_ROUTES')
      //     this.$store.commit('user/SET_USERINFO', {})
      //     resetRouter()
      //     console.warn('返回401啦，自动跳转至登录页！！！')
      //     return Promise.reject(response)
      //   default:
      //     Message.error(response.data.message || '请求失败')
      //     return Promise.reject(response)
      // }
    } else {
      return Promise.reject(response)
    }
  },
  error => Promise.reject(error)
)

function getRequestIdentify({ baseURL, url, method, params, data, isRequest = false }) {
  if (isRequest) {
    baseURL += (baseURL.charAt(baseURL.length - 1) !== '/' ? '/' : '')
    url = baseURL + url
  }
  method === 'get' && delete params.clearCache
  const requestData = [method.toLowerCase(), url]
  requestData.push(Qs.stringify(method === 'get' ? params : isRequest ? data : JSON.parse(data)))
  return requestData.join('&')
}
function removePeeding(requestData, isRequest = false, requestTime = 0) {
  window._axiosPromiseArr.forEach((v, i) => {
    // 如果请求数据相同并且小于300ms则判断重复请求
    if (v.requestData === requestData) {
      isRequest && requestTime && (requestTime - v.requestTime) <= 300 && v.cancel('重复请求啦，已取消上一次请求！！！')
      isRequest || delete window._axiosPromiseArr[i]
    }
  })
}

export default { get, post }
