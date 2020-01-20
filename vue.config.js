const path = require("path")
	// { server } = require('./server/dev')

module.exports = {
	pages: {
		index: 'src/core/main.js'
	},
	// devServer: {
	// 	after: server
	// },
	configureWebpack: {
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'src': path.resolve(__dirname, 'src'),
				'core': path.resolve(__dirname, 'src/core'),
				'plugins': path.resolve(__dirname, 'src/core/plugins'),
				'styles': path.resolve(__dirname, 'src/assets/styles'),
				'temp': path.resolve(__dirname, 'src/templates'),
			},
			extensions: ['*', '.js', '.vue', '.json']
		},
	}
}