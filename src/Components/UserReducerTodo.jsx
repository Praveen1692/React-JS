import React, { useReducer, useState } from 'react'

function UserReducerTodo() {
    const[input,setInput]=useState("");

    const reducer=(todo,action)=>{
      switch(action.type){
        case 'Add':
          return [...todo,action.payload]
           
          
         
        default:
          return todo;
      }

    }

    const[todo,dispatch]=useReducer(reducer,[]);
  return (
    <div>
        <h1>UserReducer Todo</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={()=>dispatch({type:'Add',payload:input})}>Add Todo</button>

        {
          todo.map((item,idx)=>(
            <ul>
              <li key={idx}>{item}</li>
            </ul>
          ))
        }
    </div>
  )
}

export default UserReducerTodo