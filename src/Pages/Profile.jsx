import React from "react";
import { Link } from "react-router-dom";

function Profile(props){
    return(
        <div>
            <h1>Profile</h1>
            <Link to='/dashboard'>Dashboard</Link>
            <h1>Hi you are looged in</h1>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default Profile;