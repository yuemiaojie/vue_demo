const state = {
  sidebarStatus: '0',
  language: 'zh'
}
const getters = {}
const actions = {
}
const mutations = {
  SET_SETTINGS(state, { key, val }) {
    if (state.hasOwnProperty(key)) {
      state[key] = val
    }
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
