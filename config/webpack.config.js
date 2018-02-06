const path = require('path')

module.exports = {
	entry: {
		main: ['./src/main.js']
	},
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist")
	},
	devServer: {
		contentBase: "dist",
		overlay:true
	},
	module: {
		rules: [
		{test: /\.css$/,
			use: [
			{loader: 'style-loader'},
			{loader: 'css-loader'}
			]
		}
		]
	}
}