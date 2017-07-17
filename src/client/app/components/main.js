/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, { Component } from 'react';
import SetData from './setData';
import SetType from './chartType';
import Chart from './chart';

class Main extends Component {
    render () {
        return (
            <div>
                <SetData/>

                <div className="view">
                    <SetType/>
                    <Chart/>
                </div>
            </div>
        );
    }
}

export default Main;