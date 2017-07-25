/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, { Component } from 'react';
import SetData from './setData';
import SetType from './chartType';
import Chart from './chart';
import NoChart from './noChart';
import database , { firebase } from '../databaseConfig';
import renderImage from '../conversion';

class Main extends Component {
    constructor () {
        super();
        this.state = {
            dataList : [],
            type: '',
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

        let firebaseRef, token, image, count=1;
        this.convertingChart();

        image = document.getElementById( "charts-png" );

        image.addEventListener( "load", () => {
            if ( count === 1 ) {
                firebaseRef = firebase.database().ref();
                token = firebaseRef.push().set( image.src );
                console.log("token----",token);
                count = count+1;
                return;
            } else {
                count = count+1;
                return;
            }
        } );
    };

    saveChart = () => {
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