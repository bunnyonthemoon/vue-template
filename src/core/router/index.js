import Vue from 'vue'
import VueRouter from 'vue-router'
import _404 from 'temp/404'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '*',
			name: '404',
			component: _404
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}

})

export default router
