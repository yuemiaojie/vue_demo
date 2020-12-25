import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRoutes } from './constantRoutes'
Vue.use(VueRouter)
const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const routers = createRouter()

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
console.log('originalPush', originalPush)
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export function resetRouter() {
  const newRouter = createRouter()
  routers.matcher = newRouter.matcher
}

export default routers

