import React, { useEffect, useState } from "react";

function Login() {
  const [username, setUserName] = useState("");
  const [profile, setProfile] = useState(false);

  const showProfile = () => {
    setProfile(true);
    setUserName(""); // Clear the username input
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter User Name:"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input type="password" placeholder="Enter Password" />
      <button onClick={showProfile}>Login</button>

      {profile && <h1>User Name is: {username}</h1>}
    </div>
  );
}

export default Login;
