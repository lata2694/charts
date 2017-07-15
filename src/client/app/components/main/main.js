/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, { Component } from 'react';
import SetData from '../setData/setData';
import SetType from '../chartType/chartType';
import Chart from '../chart/chart';

class Main extends Component {
    render () {
        return (
            <div>
                <SetData/>
                <SetType/>
                <Chart/>
            </div>
        );
    }
}

export default Main;