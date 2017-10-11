import * as mutTypes from '../mutations-types'

const state = {
	name: "ding"
}

const getters = {
	name : state => state.name
}

const mutations = {
	  [mutTypes.SHOW_NAME] (state) {
	  	state.name = "liang";
	  }
}

const actions = {
	showName: ({ commit }) => {
		commit(mutTypes.SHOW_NAME)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}