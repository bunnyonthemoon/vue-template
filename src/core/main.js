import Vue from 'vue'
import Index from 'temp/index'
import router from 'core/router'
import store from 'core/store'

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(Index)
})
