const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const cssModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: {
			localIdentName: '[local]__[hash:base64:5]',
		}
	}
}

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	mode: 'development',
	/* Delete devServer if you don't need to proxy */
	devServer: {
		proxy: {
			'/games': 'http://localhost:3010'
		}
	}
})
