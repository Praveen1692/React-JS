import React from "react";
import { useNavigate } from "react-router";
function Auth(props){
    const navigate=useNavigate();

    const handleClick=()=>{
        props.login();
        navigate("/profile");

    }

    return(
        <div>
            <h1>Hello Sir</h1>
            <h2>Please Login to Continue.....</h2>
            <button onClick={handleClick}>Login</button>
        </div>

    )
}

export default Auth;