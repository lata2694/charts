/**
 * Created by Lata Tiwari on 7/14/2017.
 */

import express from "express";
import webpack from 'webpack';
import config from './webpack.config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Result from './src/server/component/result';
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
    sendingMail( { to:request.body.emailTo, html: `<a href=http://localhost:9000/image?post=`+request.body.newPost+`> here </a> `} );
    response.send({ status : true });
});

app.get( '/image', ( request, response ) => {
    database.on("child_added", function(snapshot, prevChildKey) {
        let uri = '';
        ( request.query.post === snapshot.key ) ? uri = snapshot.val() : '';
        const html = ReactDOMServer.renderToString(<Result source={ uri } sth="fhjhagj"/>);
        response.send(`<!doctype html>${html}`);
    });
});

app.use ( '/*', ( req, res, next ) => {
    res.sendFile(__dirname+'\\src\\client\\index.html');
});

app.listen( port, ()=>{
    console.log("charts started");
});


