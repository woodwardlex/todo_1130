import React, {Component} from 'react';

export class ToDoRow extends Component {

    // Feature 3 & 4


    render = () =>
        <tr>
            <td>
                {this.props.item.action}
            </td>
            <td>
                <input 
                    type="checkbox"
                    checked={this.props.item.done}
                    onChange={() => this.props.callback(this.props.item)}
                />
            </td>
        </tr>
    
}