import React, { createRef, useDebugValue, useEffect, useState } from "react";
import "./components.css";
import UserCard from "./UserCard";
import axios from "axios";

function GitHubUserDetails() {
  const [name, setName] = useState("");
  const inputref=createRef();
  const btnref=createRef();
  const[data,setData]=useState({});
  const GetInfo = () => {
    //  const response=   axios.get(`https://api.github.com/users/${name}`);
    console.log("Axios");
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data)
        
      })
      .catch((error) => {
        console.log(error);
      });
      inputref.current.value="";
      setName("");
  };
  useEffect(()=>{
    inputref.current.focus();
    btnref.current.disabled=true;
  },[])
  return (
    <div className="github-wrapper">
      <h1>GitHub User Details</h1>
      <input
        className="user-input"
        type="text"
        placeholder="Enter The User Github Name:"
       
       
        onChange={(e) => setName(e.target.value)}
        ref={inputref}
      />
      <br />
      <button className="btn" onClick={GetInfo} ref={btnref}>
        Get Info
      </button>
      <br />
      <br />

      <UserCard userData={data} />
    </div>
  );
}

export default GitHubUserDetails;
