/*Created by Lata Tiwari on 7/14/2017.*/

// import 'react-hot-loader/patch';

import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import '../assets/styles/style.scss';

class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;