import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const Store = {
  modules,
  getters
}

const arr = [4, 2, 3, 4]
arr.reduce((total, num) => {
  // console.log(total) // 4 6 9
  return total + num
})

export default new Vuex.Store(Store)
