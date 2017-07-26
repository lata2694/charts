/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, { Component } from 'react';
import SetData from './setData';
import SetType from './chartType';
import Chart from './chart';
import NoChart from './noChart';
import renderImage from '../conversion';
import database from '../../databaseConfig';
// let provider = new firebase.auth.GoogleAuthProvider();

// let firebaseRef = util.firebase.database().ref();

class Main extends Component {
    constructor () {
        super();
        this.state = {
            dataList : [{item:'shjkafg', figure:74783}],
            type: 'Area Chart',
        }
    };

    gettingDataList = ( list ) => { this.setState({ dataList: list }); };
    gettingType = ( chartType ) => { this.setState({ type:  chartType}); };

    convertingChart = () => {
        let target;
        target = document.getElementsByClassName( "recharts-surface" )[0];
        renderImage( target );
    };

    validation = () => (!!(this.state.type && this.state.dataList.length ));

    databaseInteraction = () => {

        let token, image, count=1;
        this.convertingChart();

        image = document.getElementById( "charts-png" );

        image.addEventListener( "load", () =>
        {
            let storedKey;
            if ( count === 1 ) {
                // this.authorizingUser();
                this.saveUrl( image );

                // token = firebaseRef.push().set( image.src );
                // // console.log("token----",token);
                //
                // // key = firebase.database().orderByChild('item').once('value').then(function(snapshot) {
                // //     cosole.log("snapshot------", snapshot);
                // // });
                //
                // // let userId = firebase.auth().currentUser.uid;
                // storedKey = firebase.database().ref().once('value').then(function(snapshot) {
                //     // let username = snapshot.val().username;
                //     // ...
                //
                //         console.log("snapshot------", snapshot);
                //
                // });
                //
                //
                // console.log("key------", storedKey);

                count = count+1;
                return;
            } else {
                count = count+1;
                return;
            }
        } );
    };

    saveUrl = ( image ) => {
        database.push().set( image.src );

        database.on("child_added", function(snapshot, prevChildKey) {
            let newPost = snapshot.key;
            console.log("newPost-------------" + newPost);
            console.log("prevChildKey-------------" + prevChildKey);
        });
    };

    // authorizingUser = () => {
    //     console.log("sign in with google");
    //
    //     firebase.auth().signInWithRedirect(provider);
    //     console.log("result of sign in");
    //
    //     firebase.auth().getRedirectResult().then(function(result) {
    //         if (result.credential) {
    //             // This gives you a Google Access Token. You can use it to access the Google API.
    //             let token = result.credential.accessToken;
    //             console.log("token--------",token);
    //
    //             // ...
    //         }
    //         // The signed-in user info.
    //         let user = result.user;
    //         console.log("user--------",user);
    //     }).catch(function(error) {
    //         console.log("error--------",error);
    //
    //         // Handle Errors here.
    //         let errorCode = error.code;
    //         let errorMessage = error.message;
    //         // The email of the user's account used.
    //         let email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         let credential = error.credential;
    //         // ...
    //     });
    // };

    saveChart = ( event ) => {
        event.preventDefault();
        if ( !this.validation() ) {
            alert ("There's no chart");
            return;
        }
        document.getElementById('saveChart').disabled = true;
        this.databaseInteraction();
    };

    render () {
        return (
            <div>
                <SetData gettingDataList={ this.gettingDataList }/>
                <div className="view">
                    <SetType gettingType={ this.gettingType } saveChart={ this.saveChart } />
                    {
                        ( this.validation() )  ?
                            <Chart type={ this.state.type } dataList={ this.state.dataList } /> :
                            <NoChart />
                    }
                </div>
            </div>
        );
    }
}

export default Main;