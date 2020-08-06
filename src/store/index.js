import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    accounts: []
  },
  mutations: {
    login (state, data) {
      state.user = data
    },
    logout (state) {
      state.user = ''
    },
    updateAccount (state, data) {
      state.accounts = data
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    getAccount (state) {
      return state.accounts
    }
  },
  plugins: [createPersistedState()]
})
