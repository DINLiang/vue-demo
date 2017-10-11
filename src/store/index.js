import vue from 'vue'
import Vuex from 'vuex'

import * as state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import code from './modules/code'
import slide from './modules/slide'

vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    code,
    slide
  }
})