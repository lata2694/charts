/*Created by Lata Tiwari on 7/20/2017.*/
import * as admin from "firebase-admin";
import * as serviceAccount from "../../chartsgh-dd096-firebase-adminsdk-0vlv9-9e3e6b73a1.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chartsgh-dd096.firebaseio.com"
});
let database = admin.database().ref();
console.log("admin---------", admin);

export default database;
