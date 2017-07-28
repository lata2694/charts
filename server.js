/**
 * Created by Lata Tiwari on 7/14/2017.
 */

import express from "express";
import webpack from 'webpack';
import config from './webpack.config';
import database, { admin } from './src/server/databaseConfig';
import sendingMail from './src/server/mailConfig';

const app = express();
const port = "9000";
const compiler = webpack(config);
const bodyParser = require('body-parser');

app.use( require( 'webpack-dev-middleware' ) ( compiler, {
    noInfo: true,
    publicPath: '/',
    historyApiFallback: true,
} ) );


app.use( require( 'webpack-hot-middleware')( compiler ));
app.use( bodyParser() );
app.use('/sendMail',( req, res, next )=>{
    let url = +req.body.newPost;
    sendingMail( { to:req.body.emailTo, html: `<a href=http://localhost:9000/?post=`+req.body.newPost+`> here </a> `} );
    res.send({status:true});
});



app.use ( '/*', ( req, res, next ) => {
    console.log("----------------------------------------");
    res.sendFile(__dirname+'\\src\\client\\index.html');
} );

app.listen( port, ()=>{
    console.log("server started");
});


