/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, {Component} from 'react';
import Fields from '../fields/fields';

class SetData extends Component {

    constructor() {
        super();

        this.state = {
            dataFields : [],
        };
    }

    // onClickHandler = (e) => {
    //     this.setState({ item: this.state.item + 1 });
    // };

    onChangeHandler = ( event ) => {
        console.log("----onChangeHandler for---",event);
        let dataKey = [event.target.name] ;
        let value = event.target.value;

        this.state.dataFields.push( { dataKey : value } );
        // this.setState({ dataFields[e.target.name] = e.target.value });
        console.log("----this.state.dataFields---",this.state.dataFields);

        // dataFields[e.target.name] = e.target.value;
        //
        // this.setState ( dataFields );
    };

    render() {
        return (
            <div>
                <Fields onChangeHandler= {this.onChangeHandler}/>
                <button> add</button>
                <button> remove</button>
            </div>
        );
    }
}

export default SetData;
