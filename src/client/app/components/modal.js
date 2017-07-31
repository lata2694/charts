/**
 * Created by Lata Tiwari on 7/27/2017.
 */

import React, { Component } from 'react';

class CustomModal extends Component {
    constructor ( props ){
        super( props );
    }

    onSubmit = ( event ) => {
       event.preventDefault();
       let emailTo = document.getElementById('reciever').value;
       this.props.mail( this.props.newPost, emailTo );
       this.props.closeModal();
    };

    render () {
        return(
            <div className="modal">
                <form onSubmit={ this.onSubmit }>
                    <label htmlFor="to">Reciever's email <span onClick={ this.props.closeModal }>X</span></label>
                    <input type="text"
                           name="to"
                           className="entry-fields"
                           placeholder="Email of the recipient"
                           id="reciever"
                    />
                    <input type="submit" value="Send"/>
                </form>
            </div>
        );
    }
}
export default CustomModal;