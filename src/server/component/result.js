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
                { ( this.props.source==='' ) ? <img src="../../../client/app/assets/images/error.png" alt="maybe th link expired"/>
                    : <img src={ this.props.source } alt="chart"/>
                }
            </div>
        );
    }
}

export default Result;