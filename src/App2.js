import './App.css';
import React, { Component } from 'react';
import { ToDoBanner } from './ToDoBanner2';
import { ToDoRow } from './ToDoRow2';
import 'bootstrap/dist/css/bootstrap.css';



export default class App extends Component {
  //  Above we have created a class called App the extends the functionality of the Component class

  //  The export keyword makes the class available for use outside of the JS file where it is created

  constructor() {
    super();

    //  React components have a special property called "state".  The "state" is used to define the state of data (props)

    this.state = {
      recipeName: "BBQ Mac and Cheese",
      ingredientList: [
        { ingredient: "Mac and Cheese", gotit: false },
        { ingredient: "Milk", gotit: false },
        { ingredient: "BBQ Sauce", gotit: false }
      ]
    }

  } // END OF CONSTRUCTOR

  //  Feature 3
  //  If the ToDoRow Component's "done" property experiences a change event (ie. checking the Mark Complete box in the UI) then the ToDoRow Component calls a callback method called toggleToDo (below)  and passes toggleToDo the checked todo item
  //  ----- Function to display table rows ------
  ingredientRows = (finishedTask) => this.state.ingredientList.filter(
    x => x.done === finishedTask).map( y => 
      <ToDoRow   
        key={y.recipeName}
        item={y}
        callback={this.toggleGroceryItem}  // The callback will be invoked (executed, run) when everything in <ToDoRow> is finished AND the user clicks the input box
      />
    );

  //  Feature 4
  //  ----------- Function to toggle "done" property to true/false (opposite of what it was)
  //  .setState allows the in memory data to be updated
  //  When setState is invoked, React will make a new object with the changes.  Under the hood React will compare the new object with the DOM version of the object.  If there is a difference between those 2 objects then the DOM will get re-drawn (NOT a reload) and then we see the changes.
  toggleGroceryItem = (checkedTodoItem) => this.setState(
    {
      todoItems: this.state.todoItems.map(
        x => x.action === checkedTodoItem.action ? {...x, done: !x.done} : x
      )
    }
  );

  render = () =>
    <div>
      {/*Features 1&2 */}
      {/* Below is referred to as a react stub */}
      <ToDoBanner
        recipe = {this.state.recipeName}
        list = {this.state.ingredientList}
      />

      {/* Feature 3 & 4 */}
      <table className="table table-striped table-bordered">
        <thead>
          <th>Ingredient</th>
          <th>Have It</th>
        </thead>
        <tbody>
          {this.ingredientRows(false)}
        </tbody>
      </table>

      {/* Features 6 & 7 */}
      <table className="table table-striped table-bordered">
        <thead>
          <th>Ingredient</th>
          <th>Need It</th>
        </thead>
        <tbody>
          {this.ingredientRows(true)}
        </tbody>
      </table>

    </div>

} // END OF APP COMPONENT
