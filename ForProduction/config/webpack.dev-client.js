const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')
const ExtractCssCunks = require('extract-css-chunks-webpack-plugin')

module.exports = {
	name:'client',
	entry: {
		vendor:[
			'react',
			'react-dom'
		],
		main: [
			'react-hot-loader/patch',
			"babel-runtime/regenerator",
			'webpack-hot-middleware/client?reload=true',
			'./src/main.js'
		]
	},
	output: {
		filename: "[name]-bundle.js",
		chunkFilename:"[name].js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: '/'
	},
	devServer: {
		contentBase: "dist",
		overlay:true,
		//hot: true,
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
				use: ExtractCssCunks.extract({
					use: {
						loader: 'css-loader',
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
		new ExtractCssCunks({
			filename:'[name].css'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ["bootstrap"],
			filename: "[name].js",
			minChunks: Infinity
		}),
		// new htmlPlugin({
		// 	template: './src/index.ejs',
		// 	title: 'In Development'
		// })
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	]
}