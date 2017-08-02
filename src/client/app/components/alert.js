/**
 * Created by Lata Tiwari on 7/31/2017.
 */

import React, { Component } from 'react';
import { ToastContainer, ToastMessage } from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default class Alert extends Component {
    constructor( props ){
        super( props );
        // this.state={
        //     alertType:'',
        //     message:''
        // }

    };

    // alert = ( type, message) => {
    //     if( type === 'error' ) {
    //         this.refs.container.error(`${ message }`, ` `, {
    //             closeButton: true,
    //         });
    //         this.setState({ alertType: '', message: '' });
    //         return;
    //     }
    //
    //     if ( type === 'success' ) {
    //         this.refs.container.success(`${ message }`, ` `, {
    //             closeButton: true,
    //         });
    //         this.setState({ alertType: '', message: '' });
    //         return;
    //     }
    // };

    componentWillReceiveProps = ( nextProps )=>     {

        let alert, msg;
        alert = this.props.alertType;
        msg = this.props.message;

        console.log(this.props,"------------",nextProps);

        // if ( nextProps.alertType!= this.props.alertType || nextProps.message!= this.props.message ) {
        if ( nextProps!== this.props ) {
            console.log(this.props,"------in FIRST if------",nextProps);

            // this.setState({ alertType: nextProps.alertType, message: nextProps.message }, ()=> {
                if ( alert === `error` ) {
                // if ( this.state.alertType === `error` ) {
                    console.log(this.props,"------in SECOND if------",nextProps);

                    // this.errorAlert(this.state.message);
                    this.errorAlert(msg);
                    return;
                }
                if ( alert === `success` ) {
                // if ( this.state.alertType === `success` ) {
                    console.log(this.props,"------in THIRD if------",nextProps);

                    // this.successAlert( this.state.message );
                    this.successAlert( msg );
                    return;
                }
            // });
        }
    };

    errorAlert = ( message ) => {
        this.refs.container.error(`${ message }`, ` `, {
            closeButton: true,
        });
        // this.setState({ alertType: '', message: '' });

    };


    successAlert = ( message ) => {
        this.refs.container.success(`${ message }`, ` `, {
            closeButton: true,
        });
        // this.setState({ alertType: '', message: '' });

    };

    render(){
        console.log("inside alert",this.props);
        return(
            <ToastContainer
                toastMessageFactory={ToastMessageFactory}
                ref="container"
                className="toast-top-right"
            />
        );
    };
}