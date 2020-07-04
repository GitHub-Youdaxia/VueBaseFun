
const state = {
  num: 0
}

const mutations = {
  SET_NUM: (state, num) => {
    state.num += num
  }
}

const actions = {
  add ({ commit }, num) {
    commit('SET_NUM', num)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
