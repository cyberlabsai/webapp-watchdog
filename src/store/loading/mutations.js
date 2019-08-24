import Vue from 'vue'

const mutations = {
  loading: (state, value) =>
    Vue.set(
      state,
      'loading',
      value
    )
}

export default mutations
