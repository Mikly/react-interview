import React from "react";

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
                <button
                    className="btn"
                    onClick={() => props.onClick(props.todo.id)}>
                    {text}
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        props.onRemoveClick(props.todo.id)
                    }>
                    Remove from list
                </button>
            </div>
        );
};

export default TodoItem;