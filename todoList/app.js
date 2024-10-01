import "./style.css"
import { useState } from "react";

const ToDoElement = ({ value, idx, onCompleteTodo }) => {
    console.log("value: ", value);
    return (
        <l1
            style={{
                textAlign: "left",
                margin: 15,
                backgroundColor: value.isCompleted ? "#A020F0" : "#FFFF00"
            }}
        
        >
            {value.todo}
            <button
                onClick={() => onCompleteTodo(idx)}
                >
                {value.isCompleted ? "complete task" : "task completed"}
            </button>
            <button onClick={() => removeToDoItem(idx)}>
                remove to do item
            </button>
        </l1>
    );
};

export default function App() {
const [inputValue, setToDo] = useState({
    todo: "",
    isCompleted: false
})
};

const [todos, updateToDosList] = useState([]);


addToDo = () => {
    if (inputValue.todo) {
     updateToDosList([...todos, inputValue])
     setToDo({
        todo: "",
        isCompleted: false
     });
    }
};

onCompleteTodo = (idx) => {
    const ourItem = todos[idx];
    const mTodos = [...todos];

    const updatedItem = {
        ...ourItem,
        isCompleted: !outItem.isCompleted
    };

    mTodos[idx] = updatedItem;
    updateToDosList(mTodos);
};

removeToDoItem = (idx) => {
    const mTodos = [...todos];
    mTodos.splice(idx, 1);
    updateToDosList(mTodos);
}


return (
    <div className="App">
    <h1 style={{textDecoration: "underline"}}>Kyra's To Do List</h1>
    <input
        className="inputField"
            type="text"
            value={inputValue.todo}
            placeholder="add to do item"
            onChange={(e) => 
                setToDo({
                todo: e.target.value,
                isCompleted: false
            })
        } 
     />
    <button onclick={addToDo}>add To Do</button>
    <ul>
        {todos.length > 0 &&
                todos.map((value, idx) => {
                    return (
                    < ToDoElement
                    key = { value.todo + idx }
                    value = { value }
                    idx = { idx }
                    onCompleteTodo = { onCompleteTodo }
                    removeToDoItem = { removeToDoItem }
                  />
                );
            })}
            </ul>
    </div>
);
