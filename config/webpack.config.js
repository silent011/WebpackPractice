const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		main: ['react-hot-loader/patch','./src/main.js']
	},
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist")
	},
	devServer: {
		contentBase: "dist",
		overlay:true,
		hot: true,
		stats: {
			colors: true
		}
	},
	devtool: "source-map",
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
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
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
				test: /\.pug$/,
				use: [
					{loader: 'pug-loader'}
				]
			},
			{
				test: /\.hbs$/,
				use: [
					{
						loader: 'handlebars-loader',
						query: {inlineRequires: "/images/"}
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
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new htmlPlugin({
			template: './src/index.hbs',
			title: 'HBS'
		})
	]
}