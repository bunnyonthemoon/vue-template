import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from 'core/store'
import { sync } from 'vuex-router-sync'

const router = new VueRouter({
	// mode: process.env.VUE_APP_SERVER == 'local' ? 'hash' : 'history',
	mode: 'history',
	routes: [
		{
			path: '*',
			name: '404',
			component: () => import('templates/404')
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.name == from.name) return
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
})

sync(store, router)

export default router
