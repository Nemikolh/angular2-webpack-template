const path = require('path');
const colors = require('colors/safe');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./common');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDir = path.join(path.dirname(__dirname), '/dist/');


module.exports = webpackMerge(commonConfig, {
    debug: false,
    output: {
        path: outputDir,
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },
    plugins: [
        new DedupePlugin(),
        new DefinePlugin({
            VERSION: "1.0",
            IS_PRODUCTION: true
        }),
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          chunksSortMode: 'dependency',
          inject: false
        }),
        new UglifyJsPlugin({
            // beautify: true, // debug
            // mangle: false // debug
            // dead_code: false,
            // unused: false,
            // compress: { drop_debugger: false, dead_code: false, unused: false },
            // comments: true
            beautify: false,
            mangle: { screw_ie8: true, keep_fnames: true },
            compress: { screw_ie8: true },
            comments: false
        }),
    ]
});
