import api from '@api'

const state = {
  userInfo: {}
}
const getters = {}
const actions = {
  HandleUserinfo({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      api.get('user', userInfo,
        {
          headers: { isEmpty: true }
        }
      ).then(res => {
        console.log(res)
        commit('SET_USERINFO', res)
        resolve(res)
      })
    })
  }
}
const mutations = {
  SET_USERINFO(state, userInfo) {
    state.userInfo = JSON.parse(JSON.stringify(userInfo))
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
