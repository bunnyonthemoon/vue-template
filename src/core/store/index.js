import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import ModuleUI from './ui'

const store = new Vuex.Store({
	modules: {
		ui: ModuleUI
	},
	actions: {
		init({ dispatch, commit }) {
		}
	}
})

store.dispatch('init')

export default store
