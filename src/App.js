import React from "react";
import TodoItem from "./components/TodoItem"


function App() {
// variables 
    const [todos, setTodos] = useState([
        "Finish plus project.",
        "Feed peggy.",
        "Sleep.",
    ]);


    // template
    return (
    <div>
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
            <TodoItem todo={todo} key={index}/>
        ))}
    </div>
    );
}

export default App;