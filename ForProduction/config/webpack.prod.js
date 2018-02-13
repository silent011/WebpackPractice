const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
module.exports = {
	entry: {
		main: ['./src/main.js'],
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
			}
		]
	},
	plugins: [
		new OptimizeCssAssets({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				discardComments: {removeAll : true}
			},
			canPrint: true
		}),
		new ExtractText("[name].css"),
		new webpack.NamedModulesPlugin(),
		new htmlPlugin({
			template: './src/index.ejs',
			title: 'For Deployment'
		})
	]
}