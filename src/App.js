//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {ToDoBanner} from './TODOBANNER';
import {ToDoRow} from './TODOROW';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  //  Above we have created a class called App the extends the functionality of the Component class

  //  The export keyword above makes the class available for use outside of the JS file where it is created

  constructor(){
    super();

    //  React components have a special property called "state".  The "state" is used to define the state of data (props)
    this.state = {
      todoOwner: "Lexi",
      todoList: [
        {action: "Put away laundry", done: false},
        {action: "Pick up bathroom", done: false},
        {action: "Vacuum the living room", done: false},
        {action: "Organize drawers", done: false},
        {action: "Workout with mom", done: false}
      ]
    }
  }//end of CONSTRUCTOR

  //  Feature 3 & 4
  //  If the ToDoRow Component's "done" property experiences a change event (ie. checking the Mark Complete box in the UI) then the ToDoRow Component calls a callback method called toggleToDo (below)  and passes toggleToDo the checked todo item
  //  ----- Function to display table rows ------
  todoTableRows = (finishedTask) => this.state.todoList.filter(
    x => x.done === finishedTask).map(y =>
      <ToDoRow
        key={y.action}
        item={y}
        callback={this.toggleToDo}  // The callback will be invoked (executed, run) when everything in <ToDoRow> is finished AND the user clicks the input box
        //  The data passed into the callback from the ToDoRow component is passed automatically into the function defined in the callback
      />
    );


  // todoTableRows = (finishedTask) => this.state.todoList.filter(

  //   x => x.done === finishedTask).map(y => 
  //     <ToDoRow 
  //         key={y.action}
  //         item={y}
  //         callback={this.toggleToDo} // The callback will be invoked (executed, run) when everything in <ToDoRow> is finished AND the user clicks the input box
  //         //  The data passed into the callback from the ToDoRow componet is passed automatically into the function defined in the callback  
  //     />
  // );

  // ------------Function to toggle an item from done to not done or vice-versa
  toggleToDo = (checkedToDoItem) => this.setState(

    {
      todoList: this.state.todoList.map(
        bob => bob.action === checkedToDoItem.action ? {...bob, done: !bob.done} : bob

      )
    }


  );

  // toggleToDo = (checkedToDoItem) => this.setState(
  //   {
  //     todoList: this.state.todoList.map(
  //       bob => bob.action === checkedToDoItem.action ? {...bob, done: !bob.done} : bob

  //     )


  //   }



  // );

    render = () =>
      <div>
        {/* Features 1 & 2 */}
        <ToDoBanner
          todoOwner = {this.state.todoOwner}
          todoList = {this.state.todoList}
        />


        {/* Features 3 & 4 */}
        <table className ="table table-striped table-bordered">
          <thead>
            <th>Action</th>
            <th>Mark As Complete</th>
          </thead>
          <tbody>
            {this.todoTableRows(false)}
          </tbody>
        </table>

        {/* Features 6 & 7 */}
        <table className ="table table-striped table-bordered">
          <thead>
            <th>Action</th>
            <th>Mark As Not Complete</th>
          </thead>
          <tbody>
            {this.todoTableRows(true)}
          </tbody>
        </table>
      </div>
    }//end of APP

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

//export default App;
