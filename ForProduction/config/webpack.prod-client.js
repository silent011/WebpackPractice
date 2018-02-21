const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')
const ExtractCssCunks = require('extract-css-chunks-webpack-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
const CompressPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = {
	name:'client',
	entry: {
		main: ['./src/main.js'],
		vendor:[
			'react',
			'react-dom'
		]
	},
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		chunkFilename:"[name].js",
		publicPath: "/"
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
				use: ExtractCssCunks.extract({
					use: {
						loader: 'css-loader'
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
		new ExtractCssCunks(),
		new OptimizeCssAssets({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				discardComments: {removeAll : true}
			},
			canPrint: true
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: ["bootstrap"],
			filename: "[name].js",
			minChunks: Infinity
		}),
		new CompressPlugin({
			algorithm: 'gzip'
		}),
		new BrotliPlugin()
	]
}