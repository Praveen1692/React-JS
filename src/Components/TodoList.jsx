import React, { useState } from "react";
import data from "./data.json";

function TodoList() {
  const [input, setInput] = useState('');
  const [dataa, setData] = useState(data);
  const AddTodo = () => {
    const newTodoItem={
        id:dataa.length+1,
        title:input,
        completed:false
    }
    setData([...dataa,newTodoItem]);
    setInput("");
  };
  console.log(data.completed);

  const DeleteTodo = (id) => {
    console.log(`id is ${id}`);
    const newTodo = dataa.filter((todo, index) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setData(newTodo);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Enter New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={AddTodo}>Add Todo</button>
      {dataa.map((item, idx) => (
        <ul>
          <li key={idx}>
            {item.title}{" "}
            <span
              style={{ fontSize: "bold", color: "red", cursor: "pointer" }}
              onClick={() => DeleteTodo(item.id)}
            >
              Delete
            </span>{" "}
          </li>
         
        </ul>
      ))}
    </div>
  );
}

export default TodoList;
