const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
const CompressPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = env => ({
	entry: {
		main: ['./src/main.js'],
		vendor:[
			'react',
			'react-dom'
		]
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
			title: 'Production'
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(env.NODE_ENV)
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			minChunks: Infinity
		}),
		new CompressPlugin({
			algorithm: 'gzip'
		}),
		new BrotliPlugin()
	]
})