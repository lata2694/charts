/**
 * Created by Lata Tiwari on 7/20/2017.
 */
export const firebase = require ('firebase');

let config = {
    apiKey: "AIzaSyCaFCgokVDRd3eYbNq4rTxyUFl_o9EHMIk",
    authDomain: "chartsgh-dd096.firebaseapp.com",
    databaseURL: "https://chartsgh-dd096.firebaseio.com",
    projectId: "chartsgh-dd096",
    storageBucket: "chartsgh-dd096.appspot.com",
    messagingSenderId: "884577093755"
};

firebase.initializeApp(config);

let database = firebase.database();
export default database;