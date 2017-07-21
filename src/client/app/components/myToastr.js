/**
 * Created by Lata Tiwari on 7/21/2017.
 */
import React, { Component } from 'react';
import { ToastContainer, ToastMessage } from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class MtToastr extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
          message: this.props.message
        };
    };

    addAlert = () => {
        console.log("inside add Alert");
        this.refs.container.error( this.state.message, ``, {
            closeButton: true,
        });
    };

    render() {
        return(
            <div>
                <button onClick={ this.addAlert() }>dfd</button>
                <ToastContainer
                    toastMessageFactory={this.ToastMessageFactory}
                    ref="container"
                    className="toast-top-right"
                />
            </div>
        );
    };
}