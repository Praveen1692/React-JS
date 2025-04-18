import React from 'react'
import { Link } from 'react-router-dom'
import Refer from './Refer'
function HomePage() {
  return (
    <div>
        <h1>Welcome to the home page</h1>
        <Link style={{color:"red",margin:"20px",padding:"16px"}} to='/refer'>Refer</Link>
        <Link style={{color:"red",margin:"20px",padding:"16px"}} to='/Register'>Register</Link>
        <Link style={{color:"red",margin:"20px",padding:"16px"}} to='/login'>Login</Link>




    </div>
  )
}

export default HomePage