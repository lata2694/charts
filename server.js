/**
 * Created by Lata Tiwari on 7/14/2017.
 */

import express from "express";
import webpack from 'webpack';
import config from './webpack.config';
import React from 'react';
import database, { admin } from './src/server/databaseConfig';
import sendingMail from './src/server/mailConfig';
const app = express();
const port = "9000";
const bodyParser = require('body-parser');
const compiler = webpack(config);

app.use( require( 'webpack-dev-middleware' ) ( compiler, {
    noInfo: true,
    publicPath: '/',
    historyApiFallback: true,
} ) );

app.use( require( 'webpack-hot-middleware')( compiler ));

app.use( bodyParser() );

app.use( '/sendMail',( request, response ) => {
    sendingMail( { to:request.body.emailTo, imgSrc: request.body.imgSrc});
});

app.use ( '/*', ( req, res, next ) => {
    res.sendFile(__dirname+'\\public\\index.html');
    // app.use('/', express.static(path.join(__dirname, '\\src\\client\\public')));
});

app.listen( port, ()=>{
    console.log("charts started");
});


