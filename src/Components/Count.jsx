import React, { useState } from 'react'

function Count() {
    const[count,setCount]=useState(0);
    const[input,setInput]=useState(1);
  return (
    <div>
        <h1>Count</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+ Number(input))}>+++</button>
        <button onClick={()=>setCount(count- Number(input))}>----</button>
    </div>
  )
}

export default Count