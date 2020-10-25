const path = require("path")
// const BundleTracker = require("webpack-bundle-tracker")

module.exports = {
	pages: {
		index: 'src/core/main.js'
	},
	// publicPath: process.env.NODE_ENV == 'production' ? '/static/' : "http://127.0.0.1:8080/",
	// outputDir: '../server/client/',
	chainWebpack: config => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
		config.optimization
			.splitChunks(false)
		// config
		// 	.plugin('BundleTracker')
		// 	.use(BundleTracker, [{ filename: '../server/webpack-stats.json' }])
		// config.resolve.alias
		// 	.set('__STATIC__', 'static')
		// config.devServer
		// 	.public('http://0.0.0.0:8080')
		// 	.host('0.0.0.0')
		// 	.port(8080)
		// 	.hotOnly(true)
		// 	.watchOptions({ poll: 1000 })
		// 	.https(false)
		// 	// eslint-disable-next-line no-useless-escape
		// 	.headers({ "Access-Control-Allow-Origin": ["\*"] })
	},
	configureWebpack: {
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'src': path.resolve(__dirname, 'src'),
				'core': path.resolve(__dirname, 'src/core'),
				'plugins': path.resolve(__dirname, 'src/core/plugins'),
				'styles': path.resolve(__dirname, 'src/assets/styles'),
				'img': path.resolve(__dirname, 'src/assets/images'),
				'fonts': path.resolve(__dirname, 'src/assets/fonts'),
				'data': path.resolve(__dirname, 'src/assets/data'),
				'templates': path.resolve(__dirname, 'src/templates'),
				'ui': path.resolve(__dirname, 'src/templates/ui'),
				'icons': path.resolve(__dirname, 'src/assets/images/icons'),
			},
			extensions: ['*', '.js', '.vue', '.json']
		},
	},
	css: {
		loaderOptions: {
			stylus: {
				prependData: `@import '~styles/var.stylus'`
			},
		}
	}
}
function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [
				path.resolve(__dirname, './src/assets/styles/var.styl'),
			],
		})
}
