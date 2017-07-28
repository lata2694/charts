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
import database, { firebase } from '../../databaseConfig';

class Main extends Component {
    constructor () {
        super();
        this.state = {
            dataList : [{item:"jflfajg",figure:53745}],
            type: 'Area Chart',
            isOpen: false,
            newPost:'',
        }
    };

    gettingDataList = ( list ) => { this.setState({ dataList: list }); };
    gettingType = ( chartType ) => { this.setState({ type:  chartType}); };

    emptyData = () => {
        this.setState({ dataList : [],  type: ''});
    };

    convertingChart = () => {
        let target;
        target = document.getElementsByClassName( "recharts-surface" )[0];
        renderImage( target );
    };

    validation = () => (!!(this.state.type && this.state.dataList.length ));

    closeModal = () => { this.setState({ isOpen : false }); };

    databaseInteraction = () => {

        let token, image, count=1, newPost;

        this.convertingChart();

        image = document.getElementById( "charts-png" );

        image.addEventListener( "load", () =>
        {
            let storedKey;
            if ( count === 1 ) {
                newPost = this.saveUrl( image );
                this.setState ({ newPost : newPost });
                count = count+1;
                return;
            } else {
                count = count+1;
                return;
            }
        } );
    };

    mail = ( newPost, emailTo ) => {
        console.log("insdie mail function, newPost--------",newPost);
        console.log("insdie mail function, emailTo--------",emailTo);

        let payload = {
            newPost : newPost,
            emailTo : emailTo
        };
        fetch('/sendMail',
            { method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(payload)
            })
            .then ( (data)=> console.log("inside then, data------",data) )
            .catch( (err)=> console.log("inside catch, err------",err) );
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
            alert ("There's no chart");
            return;
        }
        this.setState({ isOpen: true });
        this.databaseInteraction();
    };

    render () {
        return (
            <div className="main">
                { ( this.state.isOpen ) ?  <CustomModal closeModal={ this.closeModal } mail={ this.mail } newPost={ this.state.newPost }/> : ''}
                <SetData gettingDataList={ this.gettingDataList }/>
                <div className="view">
                    <SetType gettingType={ this.gettingType } saveChart={ this.saveChart } emptyData={ this.emptyData }/>
                    {
                        ( this.validation() )  ?
                            <Chart type={ this.state.type } dataList={ this.state.dataList } /> :
                            <NoChart />
                    }
                </div>
            </div>
        );
    }
}

export default Main;