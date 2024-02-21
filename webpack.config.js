
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
	mode: 'production',
	entry: {
		filename: path.join(__dirname,'src/main.js')
	},
	output: {
		path: path.join(__dirname,'dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			// devServer: {
			// 	port: 9000,
			// 	compress: true,
			// 	hot: true,
			// 	static: {
			// 		directory: path.join(__dirname,'dist')
			// 	}
			// }
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]

}