import React, {useState}  from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoItem from './components/TodoItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
// import SearchBar from './components/SearchBar'

const App = () => {

    const [todos, setTodos] = useState([
        {id: 1, name: 'Go to the supermarket', complete: false},
        {id: 2, name: 'Call Alice', complete: false},
        {id: 3, name: 'Ask Alice to call Bob', complete: false},
        {id: 4, name: 'Do the dishes', complete: false},
        {id: 5, name: 'Change car tyres', complete: false},
    ]);
    
    const [newTodoName, setNewTodoName] = useState("");

    const onSubmit=(event) => {
        event.preventDefault();
        const newTodo = {
            id:  uuidv4(),
            name: newTodoName,
            complete: false
        }
        setNewTodoName("");
        setTodos(todos => [...todos, newTodo]);
        // console.table(todos)
    }

    // const onInputChange = (event) => {
    //     setNewTodoName(newTodoName);
    // }

    const onClick= (id) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos[i].complete = !todos[i].complete;
                setTodos(todos => [...todos]);
            }
        }
    }

    const onRemoveClick = (id) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos.splice(i,1);
                setTodos(todos => [...todos]);
            }
        }
    }

    //Lists todoItems in reverse order, just a personal opinion that newest additions should be on top, below submitbar
    const createTodoList = () => {
        todos.reverse();
        const retVal = [];
        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            retVal.push(
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onClick={onClick}
                    onRemoveClick={onRemoveClick}
                />
            );
        }
        todos.reverse();
        return retVal;  
    };

    return (
        <div className="todoListWrapper">
            <form className="submitWrapper" onSubmit={onSubmit}>
                <div className="submitDiv">
                    <input placeholder="Add new todo" 
                        value={newTodoName} onChange={({target}) => setNewTodoName(target.value)}
                    />
                    <button className="btn-submit" type="submit" value="Submit">  
                        <FontAwesomeIcon className ={"icon"} icon={faPaperPlane}/> 
                    </button>
                </div>
            </form>
            {/* <SearchBar
                    onSubmit={onSubmit}
                    newTodoName={setNewTodoName}
                    onInputChange={onInputChange}
            /> */}
            {createTodoList()}
        </div>
    );
}

export default App;
