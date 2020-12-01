//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

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
