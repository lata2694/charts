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

    componentWillMount  ()  {
        const { alertType, message } = this.props;
        this.setState({ alertType:alertType, message: message }, ()=> {
            this.alert( this.state.alertType,this.state. message );
        });
    };

    componentWillReceiveProps ( nextProps ) {
        let alert, msg;
        alert = this.props.alertType;
        this.setState({ alertType: nextProps.alertType, message: nextProps.message }, ()=> {
            this.alert(  this.state.alertType,this.state. message );
        });
    };

    alert = (  type, message ) => {
        if ( type == "error" ) {
            this.errorAlert(message);
            return;
        }
        if ( type == "success" ) {
            this.successAlert( message );
            return;
        }
    };

    errorAlert = ( message ) => {
        this.refs.container.error(`${ message }`, ` `, {
            closeButton: true,
        });
        this.setState({ alertType: '', message: '' });
    };


    successAlert = ( message ) => {
        this.refs.container.success(`${ message }`, ` `, {
            closeButton: true,
        });
        this.setState({ alertType: '', message: '' });
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