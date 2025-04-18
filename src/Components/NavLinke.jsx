// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
function NavLinke() {
  const linkStyle = {
    padding: "12px 20px",
    margin: "0 15px",
    textDecoration: "none", 
    color: "#333", 
    fontWeight: "500",
    borderRadius: "4px", 
    transition: "all 0.3s ease", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
  };

  const activeStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
        margin: "40px 0",
        textAlign: "center",
      }}
    >
      <NavLink style={linkStyle} activeStyle={activeStyle} to="/ebook">
        All Ebook
      </NavLink>
      <NavLink style={linkStyle} activeStyle={activeStyle} to="/order-history">
        All Orders
      </NavLink>
      <NavLink
        style={linkStyle}
        activeStyle={activeStyle}
        to="/payment-history"
      >
        All Payments
      </NavLink>
      <NavLink style={linkStyle} activeStyle={activeStyle} to="/profile">
        Profile
      </NavLink>
      <NavLink style={linkStyle} activeStyle={activeStyle} to="/logout">
        Logout
      </NavLink>
    </div>
  );
}

export default NavLinke;
