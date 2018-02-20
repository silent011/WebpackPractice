const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')

module.exports = {
	name:'client',
	entry: {
		vendor:[
			'react',
			'react-dom'
		],
		main: [
			'webpack-hot-middleware/client?reload=true',
			'react-hot-loader/patch',	
			'./src/main.js'
		]
	},
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: '/'
	},
	devServer: {
		contentBase: "dist",
		overlay:true,
		hot: true,
		stats: {
			colors: true
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractText.extract({
					fallback: 'style-loader',
					use: {
						loader: 'css-loader',
						options:{
							minimize: true
						}
					}
				})
			},
				{
				test: /\.styl$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'postcss-loader', options: {sourceMap: true}},
					{loader: 'stylus-loader'}
				]
			},
			{
				test: /\.html$/,
				use: [
					{loader: 'file-loader', options: {name: '[name].[ext]'}},
					{loader: 'extract-loader'},
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src']
						}
					}
				]
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name]-[hash:8].[ext]'
						}
					}
				]
			},
			{
				test: /\.md$/,
				use: [
					{loader: 'markdown-with-front-matter-loader'}
				]
			}
		]
	},
	plugins: [
		new ExtractText('[name].css'),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		// new htmlPlugin({
		// 	template: './src/index.ejs',
		// 	title: 'In Development'
		// })
	]
}