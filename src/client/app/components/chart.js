/**
 * Created by Lata Tiwari on 7/15/2017.
 */
import React, { Component } from 'react';
import { AreaChart,
    BarChart,
    LineChart,
    PieChart,
    RadarChart,
    ScatterChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Bar,
    Area,
    Pie, Cell,
    Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    Scatter
} from 'recharts';

class Chart extends Component {
    constructor( props ){
        super( props );
        this.state= {
            data: '',
            type: '',
        }
    };

    componentWillMount  ()  {
        const { type, dataList } = this.props;
        this.setState({ type:type, data: dataList }, ()=> {
        });
    };
    componentWillReceiveProps( nextProps ) {
        this.setState({ type:nextProps.type, data: nextProps.dataList });
    };

    userChart = ( type, data ) => {
        let chart = '';
        switch ( type ) {
            case "Bar Chart" : chart = (
                <BarChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="item"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="figure" fill="#8884d8" />
                </BarChart>
            ); break;

            case "Line Chart" : chart = (
                <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="item" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="figure" stroke="#8884d8" />
                </LineChart>
            ); break;

            case "Pie Chart" : {
                let COLORS = [];
                for ( let i =0; i<data.length; i++ )
                    COLORS.push('#' + Math.floor(Math.random() * 16777215).toString(16));
                let RADIAN = Math.PI / 180;
                console.log("data----------",data);
                let renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                    console.log("data in renderCustomizedLabel----------",data);
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
                    const item = data[index].item;
                    return (
                        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                            {`${(percent * 100).toFixed(0)}% : ${ item }`}
                        </text>
                    );
                };

                chart = (
                    <PieChart width={800} height={400} >
                        <Pie
                            data={data}
                            cx={300}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="figure"
                        >
                            { data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>) }
                        </Pie>
                    </PieChart>
                ); } break;

            case "Radar Chart" :chart = (
                <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
                    <Radar name="figure" dataKey="figure" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="item" />
                    <PolarRadiusAxis/>
                    <Legend/>
                </RadarChart>
            ); break;

            case "Scatter Chart" : chart = (
                <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <XAxis dataKey={'item'} name='item' />
                    <YAxis dataKey={'figure'} name='figure' />
                    <Scatter name='data' data={data} fill='#8884d8'/>
                    <Legend/>
                    <CartesianGrid />
                    <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                </ScatterChart>
            );break;

            case "Area Chart" : chart  = (
                <AreaChart width={600} height={400} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="item"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend/>
                    <Area type='monotone' dataKey='figure' stroke='#8884d8' fill='#8884d8' />
                </AreaChart>
            );break;
            default : chart = "Please select a chart type"
        }
        return chart;
    };

    render () {
        const { type, data } = this.state;
        return (
            <div className="display-chart" id="chartContainer">
                {this.userChart( type, data )}
            </div> ) ;
    }
}

export default Chart;