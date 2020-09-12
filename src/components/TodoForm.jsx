import React, { useState } from "react";


function TodoForm(props) {
    // variables
    const { addTodo } = props;
    const [value, setValue] = useState("");

    // methods
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
    // this is saying if there is nothing in value just ignore it    
        addTodo(value);
        setValue("");
    };



    // template
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add Todo..." 
            onChange={(event) => setValue(event.target.value)}
            value={value}
            />
        </form>
    );
}

export default TodoForm