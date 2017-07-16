/**
 * Created by Lata Tiwari on 7/15/2017.
 */

import React, {Component} from 'react';
class Fields extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
                <input type="text" name="item"  onChange= { this.props.onChangeHandler }/>
                <input type="text" name="figure" onChange= { this.props.onChangeHandler }/>
            </div>
        );
    }
}

export default Fields;
