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

app.use( require( 'webpack-dev-middleware' ) ( compiler, {
    noInfo: true,
    publicPath: '/',
    historyApiFallback: true,
} ) );


app.use( require( 'webpack-hot-middleware')( compiler ));

app.use ( '/*', ( req, res, next ) => {
    res.sendFile(__dirname+'\\src\\client\\index.html');
} );

app.listen( port, ()=>{
    console.log("server started");
});

// database.on("child_added",snapshot => {
//     console.log("snapshot--------",snapshot.key);
// });

// database.on("child_added", function(snapshot, prevChildKey) {
//     let newPost = snapshot.key;
//     console.log("newPost-------------" + newPost);
//     console.log("prevChildKey-------------" + prevChildKey);
// });

// sendingMail( { to:`lata.tiwari@tothenew.com`, html: `` } );