/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, {Component} from 'react';
import Fields from './fields';
import ItemList from './itemList'

class SetData extends Component {

    constructor() {
        super();

        this.state = {
            dataList : [],
            dataFields: {},
        };


    }

    // onClickHandler = (e) => {
    //     this.setState({ item: this.state.item + 1 });
    // };

    addingField = () => {
        event.preventDefault();
        console.log("----addingFields ---");

        let localDatalist = this.state.dataList;

        localDatalist.push(this.state.dataFields);

        this.setState({
            dataList:localDatalist,
        },()=>{
            console.log("----this.state.dataList--", this.state.dataList);
        });

        document.getElementById('item').value= '';
        document.getElementById('figure').value=0;
    };

    removingField = ( item ) => {
        event.preventDefault();
        console.log("----removingFields ---");
        let newDataList = [];
        console.log("this.state.dataList--------",this.state.dataList);

        newDataList = this.state.dataList.filter ( function ( element ) {
            console.log("inside filter--------");
            if( item !== element.item )  return element;
        } );

        console.log("newDataList--------",newDataList);
        this.setState( {
            dataList:newDataList
        } );

    };

    onChangeHandler = (event) => {

        console.log("----onChangeHandler for---", event);

        console.log("----in the begning of on chnage handler----this.state.dataFields---", this.state.dataFields);

        const { dataFields } = this.state;
        dataFields[event.target.name] = event.target.value;

        console.log("----this.state.dataFields---", this.state.dataFields);
    };

    render() {

        let items = [];

        items = this.state.dataList.map( ( element,index ) =>  {
            console.log("element--------",element);

            return ( <ItemList removingField={ this.removingField }
                               key = {index}
                               item= { element.item }
                               figure= { element.figure }
            />)
        } );


        return (
            <aside>
                <table>

                    <caption> Enter Data</caption>

                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th colSpan={3}>Item Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <Fields onChangeHandler={this.onChangeHandler}
                                addingField={ this.addingField }
                        />
                        { items }

                    </tbody>
                </table>
            </aside>
        );
    }
}

export default SetData;


