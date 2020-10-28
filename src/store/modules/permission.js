import { asyncRoutes } from '@/router/asyncRoutes'

function isContain(arr1, arr2) {
  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index]
    if (arr2.indexOf(element) >= 0) {
      return true
    }
  }
}

function filterChildMap(role, parents, childs) {
  childs.forEach((v, i) => {
    if (isContain(role, v.meta.role)) {
      parents.children.push({ ...v, children: [] })
      if (v.children) {
        filterChildMap(role, parents.children[i], v.children)
      }
    }
  })
}

function filterRouters(role, routers) {
  var asyncRouteMap = []
  routers.forEach((v, i) => {
    if (isContain(role, v.meta.role)) {
      asyncRouteMap.push({ ...v, children: [] })
      if (v.children) {
        filterChildMap(role, asyncRouteMap[i], v.children)
      }
    }
  })

  return asyncRouteMap
}

const state = {
  addRoutes: []
}
const getters = {}
const actions = {}
const mutations = {
  GENERATE_ROUTES(state, role) {
    console.log(2222, role, asyncRoutes)
    state.addRoutes = filterRouters(role, asyncRoutes)
  },
  DESTROY_ROUTES(state, role) {
    state.addRoutes = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
