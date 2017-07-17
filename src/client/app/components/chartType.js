/**
 * Created by Lata Tiwari on 7/15/2017.
 */

import React, { Component } from 'react';
class ChartType extends Component {

    constructor () {
        super();
        this.state = {
            type: '',
        }
    }

    onChangeHandler = ( event ) => {
        console.log("inside onchangeHandler of chart type----");
        console.log("inside onchangeHandler of chart type----",event);
        console.log("inside onchangeHandler of chart type and event.target.value is----",event.target.value);

        this.setState({
            type:event.target.value
        },()=>{
            console.log("this.state.type----",this.state.type);
        });
    };

    render () {
        return (
            <div className="type-selector">
                <span> Select Chart Type : </span>
                <select name="chart-type" id="chartType" onChange={ this.onChangeHandler }>
                    <option value="Area Chart">Area Chart</option>
                    <option value="Bar Chart">Bar Chart</option>
                    <option value="Composed Chart">Composed Chart</option>
                    <option value="Categorial Chart">Categorial Chart</option>
                    <option value="Line Chart">Line Chart</option>
                    <option value="Pie Chart">Pie Chart</option>
                    <option value="Radar Chart">Radar Chart</option>
                    <option value="Radial Bar Chart">Radial Bar Chart</option>
                    <option value="Scatter Chart">Scatter Chart</option>
                    <option value="Treemap">Treemap</option>
                </select>

                <button>Save</button>

            </div>
        );
    }
}

export default ChartType;