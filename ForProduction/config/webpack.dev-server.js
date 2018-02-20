const path = require('path')
const webpack = require('webpack')
const externals = require('./node-externals')

module.exports = {
	name:'server',
	entry: './src/server/render.js',
	output: {
		filename: "dev-server-bundle.js",
		path: path.resolve(__dirname, "../build"),
		libraryTarget: 'commonjs2'
	},
	target: 'node',
	externals,
	devServer: {
		contentBase: "dist",
		overlay:true,
		stats: {
			colors: true
		},
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
				use: {
					loader: 'css-loader'
				}
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
							name: '/images/[name]-[hash:8].[ext]',
							emitFile: false
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
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks:1
		}),
		new webpack.NamedModulesPlugin(), 
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development")
		})
	]
}