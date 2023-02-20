import React from "react";
import "../styles/navbar.css";
import Logo from "../images/logo.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <img src={Logo} alt="logo" className="logo" />
        </li>
        <li>
          <a href="/">Surreal Estate</a>
        </li>
        <li>
          <a href="/">View Properties</a>
        </li>
        <li>
          <a href="/">Add Properties</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
