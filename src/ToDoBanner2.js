import React, {Component} from 'react';

export class ToDoBanner extends Component {

    //  Feature 1 & 2
    render = () =>
    <h4 className="bg-primary text-white text-center p-2">
        {this.props.recipeName} Ingredient List (
            {this.props.ingredientList.filter(www => !www.done).length} items not owned
        )
    </h4>

    

}