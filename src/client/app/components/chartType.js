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

    onChangeHandler = ( event ) => { this.setState({ type:event.target.value }); };

    onClickHandler = ( event ) => {
        event.preventDefault();
        this.props.gettingType( this.state.type );
        document.getElementById("chartType").disabled = true;
        document.getElementById("showChart").disabled = true;
    };

    render () {
        return (
            <div className="type-selector">
                <span> Select type of chart: </span>
                <select name="chart-type"
                        id="chartType"
                        onChange={ this.onChangeHandler }>
                    <option value="Select Chart">Select Chart</option>
                    <option value="Area Chart">Area Chart</option>
                    <option value="Bar Chart">Bar Chart</option>
                    <option value="Line Chart">Line Chart</option>
                    <option value="Pie Chart">Pie Chart</option>
                    <option value="Radar Chart">Radar Chart</option>
                    <option value="Radial Bar Chart">Radial Bar Chart</option>
                    <option value="Scatter Chart">Scatter Chart</option>
                </select>
                <button id="saveChart" onClick={ this.props.saveChart}>Save</button>
                <button id="showChart" onClick={ this.onClickHandler }>Show Chart</button>
            </div>
        );
    }
}

export default ChartType;