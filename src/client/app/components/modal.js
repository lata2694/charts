/**
 * Created by Lata Tiwari on 7/27/2017.
 */

import React, { Component } from 'react';

class CustomModal extends Component {
    constructor ( props ){
        super( props );
    }
    render () {
        return(
            <div className="modal">
                <form>
                    <label htmlFor="to">Reciever's email <span onClick={ this.props.closeModal }>X</span></label>
                    <input type="text" name="to" className="entry-fields" placeholder="Email of the recipient"/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        );
    }
}
export default CustomModal;