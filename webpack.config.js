/**
 * Created by Lata Tiwari on 7/13/2017.
 */

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require ('extract-text-webpack-plugin');

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
                loader: 'babel-loader',
            },

            // {
            //     test: /\.js$/,
            //     include: APP_DIR,
            //     loaders: ['react-hot-loader', 'babel-loader'],
            //     // include: path.join(__dirname, 'src')
            // },1

            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },

            // {
            //     test: /\<svg/,
            //     use: {
            //         loader: 'svg-url-loader',
            //         options: {}
            //     }
            // }

            // {
            //     test: /\.scss$/,
            //     loaders: [ 'style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap' ]
            // },

            // {
            // test: /\.scss$/,
            // loader: ExtractTextPlugin.extract('css!sass')

            // test: /\.sass$/,
            // exclude: /node_modules/,
            // loader: ExtractTextPlugin.extract('style-loader', 'css!sass?indentedSyntax=true&sourceMap=true')

            // loader: ExtractTextPlugin.extract(
            //     // 'style', // The backup style loader
            //     'css?sourceMap!sass?sourceMap'
            // )

            // }
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

        // new ExtractTextPlugin(APP_DIR+'/assets/styles/style.scss', {
        //     allChunks: true
        // })
    ],

    devServer: {
        hot: true,
        inline: true,
        contentBase: BUILD_DIR,
        historyApiFallback: true
    }
};

module.exports = config;