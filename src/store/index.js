import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeNavState: ''
  },
  mutations: {
    [types.GET_ACVTIVE_STATE] (state, payload) {
      state.activeNavState = payload
    }
  },
  actions: {},
  modules: {}
})
