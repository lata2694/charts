/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, { Component } from 'react';
import SetData from './setData';
import SetType from './chartType';
import Chart from './chart';
import NoChart from './noChart';
import CustomModal from './modal';
import renderImage from '../conversion';
import Alert from './alert';
import database, { firebase } from '../../databaseConfig';

class Main extends Component {
    constructor () {
        super();
        this.state = {
            dataList : [],
            type: '',
            isOpen: false,
            newPost: '',
            alertType: '',
            message: '',
            imgSrc: '',
        }
    };

    gettingDataList = ( list ) => { this.setState({ dataList: list }); };
    gettingType = ( chartType ) => { this.setState({ type:  chartType}); };

    convertingChart = () => {
        let target;
        target = document.getElementsByClassName( "recharts-surface" )[0];
        renderImage( target );
    };

    validation = () => (!!(this.state.type && this.state.dataList.length ));

    closeModal = () => { this.setState({ isOpen : false }); };

    databaseInteraction = () => {

        let image, count=1, newPost;

        this.convertingChart();

        image = document.getElementById( "charts-png" );

        image.addEventListener( "load", () =>
        {
            let storedKey;
            if ( count === 1 ) {
                newPost = this.saveUrl( image );
                this.setState ({ newPost : newPost , imgSrc: image.src});
                count = count+1;
                return;
            } else {
                count = count+1;
                return;
            }
        } );
    };

    mail = ( emailTo ) => {
        let payload = {
            newPost : this.state.newPost,
            emailTo : emailTo,
            imgSrc : this.state.imgSrc,
        };
        fetch('/sendMail',
            { method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify( payload )
            })
            .then ( (data)=> console.log("got results") )
            .catch( (err)=> console.log("some error") );
    };

    saveUrl = ( image ) => {
        let newPost;
        database.push().set( image.src );

        database.on("child_added", function(snapshot, prevChildKey) {
            newPost = snapshot.key;
        });
        return newPost;
    };

    saveChart = ( event ) => {
        event.preventDefault();
        if ( !this.validation() ) {
            this.setState({ alertType: `error`, message: `There's no chart` });
            return;
        }
        this.setState({ isOpen: true });
        this.databaseInteraction();
    };

    forAlert = ( alertType, message ) => {
      this.setState({
          alertType : alertType,
          message : message,
      });
    };

    render () {
        let validationResult = ( this.validation() );
        return (
            <div className="main">
                <Alert alertType={ this.state.alertType } message={ this.state.message }/>
                { ( this.state.isOpen ) ?
                    <CustomModal closeModal={ this.closeModal }
                                 mail={ this.mail }
                                 newPost={ this.state.newPost }
                                 forAlert={ this.forAlert }
                    /> : ''
                }
                <SetData gettingDataList={ this.gettingDataList } forAlert={ this.forAlert }/>
                <div className="view">
                    <SetType gettingType={ this.gettingType }
                             saveChart={ this.saveChart }
                             emptyData={ this.emptyData }
                            forAlert={ this.forAlert }
                    />
                    {
                        ( validationResult ) ?
                            <Chart type={ this.state.type } dataList={ this.state.dataList } /> : <NoChart />
                    }
                </div>
            </div>
        );
    }
}

export default Main;