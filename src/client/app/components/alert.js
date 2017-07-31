/**
 * Created by Lata Tiwari on 7/31/2017.
 */

import React, { Component } from 'react';
import { ToastContainer, ToastMessage } from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default class Alert extends Component {
    constructor( props ){
        super( props );
        this.state={
            alertType:'',
            message:''
        }

    };

    componentWillReceiveProps = ( nextProps )=> {
        if ( nextProps!= this.props ) {
            this.setState({ alertType: nextProps.alertType, message: nextProps.message }, ()=> {
                this.alert( this.state.alertType, this.state.message );
            });
        }

    };


    alert = ( type, message) => {
        if( type === 'error' ) {
            this.refs.container.error(`${ message }`, ` `, {
                closeButton: true,
            });
            return;
        }

        if ( type === 'success' ) {
            this.refs.container.success(`${ message }`, ` `, {
                closeButton: true,
            });
            return;
        }
    };

    render(){
        return(
            <ToastContainer
                toastMessageFactory={ToastMessageFactory}
                ref="container"
                className="toast-top-right"
            />
        );
    };
}