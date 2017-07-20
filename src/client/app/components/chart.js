/**
 * Created by Lata Tiwari on 7/15/2017.
 */
import React, { Component } from 'react';
// require('svg-url-loader!');
import { AreaChart,
    BarChart,
    ComposedChart,
    LineChart,
    PieChart,
    RadarChart,
    RadialBarChart,
    ScatterChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Bar,
    Area,
    Pie, Sector, Cell,
    Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    RadialBar,
    Scatter
    } from 'recharts';

class Chart extends Component {
    constructor( props ){
        super( props );
        this.state= {
            data: this.props.dataList,
            type: this.props.type,
        }
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
                                let renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
                                    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
                                    return (
                                        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                                            {`${(percent * 100).toFixed(0)}%`}
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
                                </RadarChart>
                            ); break;

            case "Radial Bar Chart" : {
                                        const style = {
                                            top: 0,
                                            left: 350,
                                            lineHeight: '24px'
                                        };
                                        chart = (
                                            <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
                                                <RadialBar minAngle={15} label background clockWise={true} dataKey='figure'/>
                                                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
                                            </RadialBarChart>
                                        );} break;

            case "Scatter Chart" : chart = (
                                        <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                                        <XAxis dataKey={'item'} name='item' />
                                        <YAxis dataKey={'figure'} name='figure' />
                                        <Scatter name='data' data={data} fill='#8884d8'/>
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
                                <Area type='monotone' dataKey='figure' stroke='#8884d8' fill='#8884d8' />
                            </AreaChart>
                        );break;
            default : chart = "Please select a chart type"
        }
        return chart;
    };

//     svg_to_png_replace =(target) =>{
//     console.log("----------inisde svg_to_png_replace-------target is-------",target); //put your svg
//
//     let data, img;
//     data = this.svg_to_png_data(target);
//     img = new Image();
//     img.src = data;
//     console.log("----------inisde svg_to_png_replace-------img is-------",img); //put your svg
//
//     // return img;
//     target.parentNode.replaceChild(img, target);
// };
//     svg_to_png_data =(target) =>{
//
//     console.log("----------inisde svg_to_png_data-------target is-------",target);
//     console.log("----------baseURI-------",target.baseURI);
//     console.log("----------inisde svg_to_png_data-------typeof target is-------",typeof target);
//
//         let ctx, mycanvas, svg_data, img, child;
//
//     // // Flatten CSS styles into the SVG
//     for (let i = 0; i < target.childNodes.length; i++) {
//
//         child = target.childNodes[i];
//         let cssStyle = window.getComputedStyle(child); //gives value of all the css eleemnents is a WEBAPI
//         if(cssStyle){
//             child.style.cssText = cssStyle.cssText; //cssText property sets or returns the contents of a style declaration as a string
//         }
//     }
//
//     // Construct an SVG image; xmlns is required for image/svg+xml files
//     svg_data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + target.width.baseVal.value +
//         '" height="' + target.height.baseVal.value + '">' + target.innerHTML + '</svg>';
//
//     console.log("----------inisde svg_to_png_data svg_data-------",svg_data);
//
//     img = new Image();  //constructor creates a new HTMLImageElement instance
//     img.src = "data:image/svg+xml," + encodeURIComponent(svg_data);
//
//     console.log("----------inisde svg_to_png_data new image is-------",img);
//         console.log("target.offsetWidth----------",target.width.baseVal.value);
//         console.log("target.offsetHeight----------",target.height.baseVal.value);
//     // Draw the SVG image to a canvas
//     mycanvas = document.createElement('canvas');
//     mycanvas.width = target.width.baseVal.value;
//     mycanvas.height = target.height.baseVal.value;
//     ctx = mycanvas.getContext("2d");
//     ctx.drawImage(img, 0, 0); //draws the image onto the canvas
//     console.log("----------inisde svg_to_png_data canvas created is-------",mycanvas);
//
//     // Return the canvas's data
//     console.log("----------inisde svg_to_png_data mycanvas.toDataURL('image/png')-------",mycanvas.toDataURL("image/png"));
//     console.log("----------inisde svg_to_png_data mycanvas.toDataURL()-------",mycanvas.toDataURL());
//     console.log(mycanvas.toDataURL());
//
//     return mycanvas.toDataURL("image/png"); //convert canvas to data uri
// }

// sth = () => {
//         let target = document.getElementsByClassName("recharts-surface")[0];
//         console.log("----------------------",target);
//
//         console.log("returned cvalue is-----",this.svg_to_png_replace(target));
// }

    render () {
        return (
            <div className="display-chart" id="chartContainer">
                {/*<button onClick={this.sth}>sth</button>*/}
                {this.userChart( this.state.type, this.state.data )}
            </div> ) ;
    }
}

export default Chart;