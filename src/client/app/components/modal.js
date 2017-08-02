/**
 * Created by Lata Tiwari on 7/27/2017.
 */

import React, { Component } from 'react';

class CustomModal extends Component {
    constructor ( props ){
        super( props );
    };

    onSubmit = ( event ) => {
       event.preventDefault();
       let emailTo = null, emailToVlaue = null;
        emailTo = document.getElementById('reciever');
        emailToVlaue = emailTo.value;
        if ( emailToVlaue ) {
            this.props.mail( emailToVlaue );
            this.props.forAlert( `success`, `Mail Sent` );
            emailTo.value = '';
        } else {
            this.props.forAlert( `error`, `Please enter a valid email` );
        }
    };

    render () {
        console.log("*************inside customModal************");
        return(
            <div className="modal">
                <form onSubmit={ this.onSubmit }>
                    <label htmlFor="to">Reciever's email <span onClick={ this.props.closeModal }>X</span></label>
                    <input type="email"
                           name="to"
                           className="entry-fields"
                           placeholder="Email of the recipient"
                           id="reciever"
                           required
                    />
                    <input type="submit" value="Send"/>
                </form>
            </div>
        );
    }
}
export default CustomModal;