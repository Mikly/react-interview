import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck} from '@fortawesome/free-solid-svg-icons'
const TodoItem = (props) => {

        var color;
        var text;

        if (props.todo.complete === true) {
            color = 'lightgreen';
            text = 'Complete';
        } else {
            color = 'pink';
            text = 'Incomplete';
        }

        return (
            <div className="wrapper" style={{backgroundColor: color}}>
                <h3>{props.todo.name}</h3>

                <FontAwesomeIcon icon={faCheck} 
                    onClick={() => props.onClick(props.todo.id)}
                />
                <FontAwesomeIcon icon={faTrash} 
                    onClick={() =>
                    props.onRemoveClick(props.todo.id)}
                />
            </div>
        );
};

export default TodoItem;