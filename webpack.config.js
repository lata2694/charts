/**
 * Created by Lata Tiwari on 7/13/2017.
 */

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let BUILD_DIR = path.resolve(__dirname, 'src/client/public');
let APP_DIR = path.resolve(__dirname, 'src/client/app');

let config = {

    entry: [
        APP_DIR + '/index.jsx'
    ],

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    },

    //historyApiFallback : to serve your index.html in place of 404
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/client/index.html'),
            filename: 'index.html',
            multistep: true,
            historyApiFallback: true
        }),

        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        hot: true,
        inline: true,
        contentBase: BUILD_DIR
    }
};

module.exports = config;

