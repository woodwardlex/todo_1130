import React, {Component} from 'react';

export class VisibilityControl extends Component{

    //Feature 8
    render = () =>
    <div className="form-check">
        <input 
            className="form-check-input"
            type="checkbox"
            onChange={(e) => this.props.callback(e.target.checked)}
            checked={this.props.isChecked}
        />
        <label className="form-check-label">
            Show {this.props.description}
        </label>
    </div>
}