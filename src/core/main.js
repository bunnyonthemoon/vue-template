import './settings'

import Vue from 'vue'
import router from 'core/router'
import store from 'core/store'
import App from 'templates/App'

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
