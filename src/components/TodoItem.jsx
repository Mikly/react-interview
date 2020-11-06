import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck} from '@fortawesome/free-solid-svg-icons'
const TodoItem = (props) => {

    let style = "";
    if (props.todo.complete === true) {
        style = "complete";
    } else {
        style = "incomplete"
    }

    return (
        <div className={"todoItem"} >
            <div className={style}>
                <h3>{props.todo.name}</h3>
                
            </div>
            <div className={"iconsDiv"}>
                    <FontAwesomeIcon className ={"icon"} icon={faCheck} 
                        onClick={() => props.onClick(props.todo.id)}
                    />
                    <FontAwesomeIcon className ={"icon"} icon={faTrash} 
                        onClick={() =>
                        props.onRemoveClick(props.todo.id)}
                    />
                </div>
        </div>
    );
};

export default TodoItem;