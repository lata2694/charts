/**
 * Created by Lata Tiwari on 7/14/2017.
 */
import React, {Component} from 'react';
import Fields from './fields';
import ItemList from './itemList';

class SetData extends Component {
    constructor() {
        super();
        this.state = {
            dataList: [],
            item:'',
            figure:0,
        };
    };

    addingField = () => {
        console.log("adding item");
        event.preventDefault();
        if( this.validation() ) {
            this.props.forAlert( `error`, "Please add items and value" );
            return ;
        } else {
            this.props.noAlert();
            let localDatalist = this.state.dataList;
            let obj = {
                item: this.state.item,
                figure: this.state.figure
            };
            localDatalist.push(obj);
            this.setState({ dataList:localDatalist, item: '', figure: 0 },() => { this.props.gettingDataList( this.state.dataList ); });
            document.getElementById('item').value= '';
            document.getElementById('figure').value= undefined;

        }

    };

    onChangeHandler = (event) => {
        ( event.target.name==='item' ) ? this.state.item = event.target.value : this.state.figure = parseInt(event.target.value);
    };

    removingField = ( item ) => {
        console.log("removing item");

        event.preventDefault();
        let newDataList = [];
        newDataList = this.state.dataList.filter ( function ( element ) {
            if( item !== element.item )  return element;
        } );
        this.setState({ dataList: newDataList, item: '', figure: 0 },() => { this.props.gettingDataList( this.state.dataList ); });
    };

    validation = () => { return ( this.state.item === '' || this.state.figure === 0 ) };

    render() {
        let items = [];
        items = this.state.dataList.map( ( element,index ) =>  {
            return ( <ItemList removingField={ this.removingField }
                               key = {index}
                               item= { element.item }
                               figure= { element.figure }
            />)
        } );
        return (
            <aside id="setData">
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
