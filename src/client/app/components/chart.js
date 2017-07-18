/**
 * Created by Lata Tiwari on 7/15/2017.
 */
import React, { Component } from 'react';
import { AreaChart,
    BarChart,
    ComposedChart,
    LineChart,
    PieChart,
    RadarChart,
    RadialBarChart,
    ScatterChart,
    Treemap,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Bar } from 'recharts';

class Chart extends Component {

    constructor( props ){
        super( props );
        this.state= {
            data: this.props.dataList,
            type: this.props.type
        }
    };
    

    render () {

        let type = this.state.type;

        if ( type === 'Line Chart' ) {
            return (
                <div className="display-chart">
                    <LineChart width={730} height={250} data={this.state.data}
                               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="item" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="figure" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>

                </div>
            );
        } else {
            return <p>this is not valid</p>
        }
    }
}

export default Chart;