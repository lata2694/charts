/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, { Component } from 'react';
import SetData from './setData';
import SetType from './chartType';
import Chart from './chart';
import NoChart from './noChart';

class Main extends Component {

    constructor () {
        super();
        this.state = {
            dataList : [],
            type: '',
        }
    }

    gettingDataList = ( list ) => {
        this.setState({ dataList: list });
    };

    gettingType = ( chartType ) => {

        this.setState({ type:  chartType});
    };

    render () {
        return (
            <div>
                <SetData gettingDataList={ this.gettingDataList }/>
                <div className="view">
                    <SetType gettingType={ this.gettingType } />

                    {
                        ( this.state.type && this.state.dataList.length )  ?
                            <Chart type={ this.state.type } dataList={ this.state.dataList }/> :
                            <NoChart />
                    }
                </div>
            </div>
        );
    }
}

export default Main;