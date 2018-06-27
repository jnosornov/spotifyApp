const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// > Root app
const app_folder = path.resolve(__dirname, './app');

// > Distribution
const dist_folder = path.resolve(__dirname, './dist');
const bundle_file = 'bundle.js';

// > Source
const src_folder = path.resolve(app_folder, './src');
const entry_file = path.resolve(src_folder, './index');

module.exports = {
	mode: 'development',
	entry: entry_file,
	output: {
		path: dist_folder,
		filename: bundle_file,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(css|sass|scss)?$/,
				use: ['style-loader','css-loader', 'sass-loader']
			},
			{
				test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
				loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true,
		compress: true,		
		port: 3000
    },
    plugins: [ new HtmlWebpackPlugin({
		template: './app/index.html'
		}) 
	]
}