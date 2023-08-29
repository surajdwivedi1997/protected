import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const handleLogin = () => {
    localStorage.setItem("auth", JSON.stringify({ isAuth: true }));
  };
  const handleLogout = () => {
    localStorage.clear();
  };
  const activeNavLink = ({ isActive }) => {
    return {
      padding: "0.5rem",
      backgroundColor: isActive ? "#ccc" : null
    };
  };

  return (
    <nav>
      <NavLink style={activeNavLink} to="/">
        Home
      </NavLink>
      <NavLink style={activeNavLink} to="/public">
        Public Route
      </NavLink>
      <NavLink style={activeNavLink} to="/private">
        Private Route
      </NavLink>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Nav;
