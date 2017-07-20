/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, { Component } from 'react';
import SetData from './setData';
import SetType from './chartType';
import Chart from './chart';
import NoChart from './noChart';
import database , { firebase } from '../databaseConfig';
import svgImage from '../conversion';

class Main extends Component {
    constructor () {
        super();
        this.state = {
            dataList : [],
            type: '',
        }
    }
    gettingDataList = ( list ) => { this.setState({ dataList: list }); };
    gettingType = ( chartType ) => { this.setState({ type:  chartType}); };

    convertingChart = () => {
        let target = document.getElementsByClassName( "recharts-surface" )[0];
        return ( svgImage( target ));
    };

    saveChart = ( ) => {
        let dataImageUri = this.convertingChart();

        //stroing value in firebase

        //taking reference of db
        let firebaseRef = firebase.database().ref();

        //will sore data corresponding to a random key
        firebaseRef.push().set( dataImageUri );

        document.getElementById('saveChart').disabled = true;

        //sync data changes
        // firebase.database.on('value', snapshot => {
        //     //snapshot is snapshot of database which returns multiple things ex. keyname
        //     console.log("firebase---sync data when changes are made---",snapshot.val());
        // });

        //verify token
    };

    render () {
        return (
            <div>
                <SetData gettingDataList={ this.gettingDataList }/>
                <div className="view">
                    <SetType gettingType={ this.gettingType } saveChart={ this.saveChart } />
                    {
                        ( this.state.type && this.state.dataList.length )  ?
                            <Chart type={ this.state.type } dataList={ this.state.dataList } /> :
                            <NoChart />
                    }
                </div>
            </div>
        );
    }
}

export default Main;