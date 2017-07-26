/*Created by Lata Tiwari on 7/20/2017.*/

import * as firebase from 'firebase';
import * as admin from "firebase-admin";
import * as serviceAccount from "../chartsgh-dd096-firebase-adminsdk-0vlv9-9e3e6b73a1.json";

// let database, config;
let config;

//firebase configuration for client side app
config = {
    apiKey: "AIzaSyCaFCgokVDRd3eYbNq4rTxyUFl_o9EHMIk",
    authDomain: "chartsgh-dd096.firebaseapp.com",
    databaseURL: "https://chartsgh-dd096.firebaseio.com",
    projectId: "chartsgh-dd096",
    storageBucket: "chartsgh-dd096.appspot.com",
    messagingSenderId: "884577093755"
};

firebase.initializeApp ( config );

// database = firebase.database().ref();

//firebase-admin SDK configuration for server side app
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chartsgh-dd096.firebaseio.com"
});

console.log("admin---------", admin);

// admin.database().ref().on("child_added",snapshot => {
//     console.log("snapshot--------",snapshot.key);
// });

// export default { firebase, database };
// export default { firebase, admin, databaseClient, databaseAdmin };
// export default { firebase, admin, database };

export default { firebase, admin };
