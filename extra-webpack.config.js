var BrotliPlugin = require('brotli-webpack-plugin');
module.exports = {
	plugins: [
		new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg|ts)$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
}
