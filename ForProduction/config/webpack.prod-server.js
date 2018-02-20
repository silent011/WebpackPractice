const path = require('path')
const webpack = require('webpack')
const ExtractText = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	name:'server',
	entry: './src/server/render.js',
	output: {
		filename: "prod-server-bundle.js",
		path: path.resolve(__dirname, "../build"),
		libraryTarget: 'commonjs2'
	},
	target: 'node',
	externals: nodeExternals(),
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
		new ExtractText("[name].css"),
		new webpack.NamedModulesPlugin(), 
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	]
}