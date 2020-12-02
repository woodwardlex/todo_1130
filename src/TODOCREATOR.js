import Reac, {Component} from 'react';

export class ToDoCreator extends Component{

    constructor(props){
        super(props);

        //  We created this constructor above so that we could pass in the App's props.  Remember props is simply the App's data.  We did this so that we had access to the "state" object.  Once we have the state object we add a new property to it called "newToDoItem" and set its initial value to "" - as seen in the next line below:

        this.state = {newToDoItem: ""}

    };//end of CONSTRUCTOR

    //  Feature 5b
    //  The updateNewToDoItem method is for the onChange event of the input box below for adding a new todo item.  The updateNewToDoItem takes in the event from the onChange and sets the state of the newToDoItem property
    updateNewToDoItem = (event) =>
    {
        this.setState(
            {newToDoItem: event.target.value}
        );
    }

    //  Feature 5c
    //  The createNewTodo method is for the onClick of the Add New ToDo button
    //  The createNewTodo method does 2 things:
    //  1) invokes the callback of the ToDoCreator Component and passes the callback the value of the new todo item - which is: this.state.newToDoItem
    //  2) resets the newToDoItem property back to "" so it is blank and ready for the next new todo item to be added
    createNewToDo = () =>
    {
        this.props.callback(this.state.newToDoItem);
        this.setState({newToDoItem: ""});
    }
        
    render = () => 
        <div className="my-1">
            <input 
                className="form-control"
                value={this.state.newToDoItem}
                onChange={this.updateNewToDoItem}
            />

            <button 
                className="btn btn-primary mt-1"
                onClick={this.createNewToDo}
            >
                Add New ToDo
            </button>
        </div>

}