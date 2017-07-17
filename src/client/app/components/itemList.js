/**
 * Created by Lata Tiwari on 7/17/2017.
 */
import React, { Component } from 'react';

class ItemList extends Component {
    constructor( props ) {
       super( props );
       console.log("props of itemList-------------",props);
    }

    render() {
        return (
            <tr>
                {console.log("props of itemList in render-------------",this.props)}

                <td> { this.props.item } </td>
                <td> { this.props.figure } </td>
                <td> <button id="remove-item" onClick={ () => this.props.removingField( this.props.item ) } >
                        <span className="tooltip"> remove this item </span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default ItemList;