import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRoutes } from './constantRoutes'
Vue.use(VueRouter)
const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const routers = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  routers.matcher = newRouter.matcher
}

export default routers

