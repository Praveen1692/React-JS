import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Todo() {

    
  return (

    <div>
        <h1>Todo Funton</h1>

        <input type="text" name="todo" placeholder="Enter The Todo Name:" value={todo} onChange={(e)=>setTodo(e.target.value)} />


        <button onClick={AddTodo}>Add Todo Btn</button>

        <button  onClick={()=>setTodo('Post')}>Post</button>
        <button onClick={()=>setTodo('USers')}>User</button>
        <button onClick={()=>setTodo('Comments')}>Comments</button>


        {
          todo.map((item,idx)=>(
            <ul>
              <li style={{color:"red",padding:"8px",margin:"6px",fontSize:"20px",textAlign:"center"}}  key={item.id}>Title: {item.title}</li>
              <li style={{color:"blue",padding:"8px",margin:"6px",fontSize:"20px",textAlign:"center"}} key={item.id}>body: {item.body}</li>
            </ul>
          ))
        }



    


    </div>
  )
}

export default Todo