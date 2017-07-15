/**
 * Created by Lata Tiwari on 7/14/2017.
 */

import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
          <div>
            <header>

                <div>
                    <h1><a href="#"></a> </h1>
                </div>

                <div>
                    <p>small inroduction of app</p>
                    <ul>
                        <li> <a href="#">A</a> </li>
                        <li><a href="#">B</a> </li>
                    </ul>
                </div>

            </header>
          </div>
        );
    }
}

export default Header;