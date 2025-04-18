import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const[data,setData]=useState([]);
const DataHandle=(idx)=>{
  console.log(idx);
  
}

  const GetData=()=>{
    axios.get('https://api.github.com/users?since=XXX')
    .then((response)=> setData(response.data))
    .catch((error)=>console.log(error)
    )
    
  }



  useEffect(()=>{

    GetData();

  },[]);
  return (
    <div>
      <h1>Login</h1>
      {
        data.map((item,idx)=>(
          <ul>
          <Link to={"/refer/"+item.id}><li key={item.id}>{item.login}</li></Link>
          </ul>
        ))
      }
     
    </div>
  )
}

export default Login