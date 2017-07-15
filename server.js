/**
 * Created by Lata Tiwari on 7/14/2017.
 */

console.log("serve.js");

import express from "express";
import webpack from 'webpack';
import config from './webpack.config';

const app = express();
const port = "3000";
const compiler = webpack(config);

app.use( require( 'webpack-dev-middleware' ) ( compiler, {
    noInfo: true,
    publicPath: '/',
    historyApiFallback: true,
} ) );

app.use( require( 'webpack-hot-middleware')( compiler ));

app.use ( '/*', ( req, res, next ) => {
    res.sendFile(__dirname+'\\src\\client\\index.html');
} );

app.listen( port );