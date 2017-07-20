/**
 * Created by Lata Tiwari on 7/15/2017.
 */

import React, {Component} from 'react';

class Fields extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td> <input type="text"
                            id="item"
                            name="item"
                            className="entry-fields"
                            placeholder="Enter Item"
                            onChange={ this.props.onChangeHandler }
                            required
                    />
                </td>
                <td colSpan={2}> <input type="number"
                                        id="figure"
                                        name="figure"
                                        className="entry-fields"
                                        placeholder="Enter value"
                                        onChange={ this.props.onChangeHandler }
                                        required
                    />
                </td>
                <td>
                    <button id="add-item" onClick= { this.props.addingField }>
                        <span className="tooltip"> add this item </span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default Fields;
