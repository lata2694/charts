/**
 * Created by Lata Tiwari on 7/31/2017.
 */

import React, { Component } from 'react';
import { ToastContainer, ToastMessage } from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default class Alert extends Component {
    constructor( props ){
        super( props );
        //
        // let type = this.props.alertType;
        // if( type === 'error' ) {
        //     this.refs.container.error(`${ this.props.message }`, ` `, {
        //         closeButton: true,
        //     });
        //     return;
        // }
        //
        // if ( type === 'success' ) {
        //     this.refs.container.success(`${ this.props.message }`, ` `, {
        //         closeButton: true,
        //     });
        //     return;
        // }
    };

    componentWillReceiveProps = ( nextProps )=> {
            console.log("before alert component");
        let type = this.props.alertType;
        let messgae = this.props.message;
        if( type === 'error' ) {
            this.refs.container.error(`${ messgae }`, ` `, {
                closeButton: true,
            });
            return;
        }

        if ( type === 'success' ) {
            this.refs.container.success(`${ messgae }`, ` `, {
                closeButton: true,
            });
            return;
        }
    };

    // componentDidMount = () => {
    //     console.log("after alert component");
    //     let type = this.props.alertType;
    //         if( type === 'error' ) {
    //             this.refs.container.error(`${ this.props.message }`, ` `, {
    //                 closeButton: true,
    //             });
    //             return;
    //         }
    //
    //         if ( type === 'success' ) {
    //             this.refs.container.success(`${ this.props.message }`, ` `, {
    //                 closeButton: true,
    //             });
    //             return;
    //         }
    //
    // };

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