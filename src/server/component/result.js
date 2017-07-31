/**
 * Created by Lata Tiwari on 7/31/2017.
 */
import React, { Component } from 'react';

class Result extends Component {
    constructor( props ){
        super( props );
    }
    render(){
        return(
            <div>
                <img src={ this.props.source } alt="chart"/>
            </div>
        );
    }
}

export default Result;