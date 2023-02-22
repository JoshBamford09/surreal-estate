import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li className="nav-logo">
          <img src={Logo} alt="logo" className="logo" />
        </li>
        <li className="nav-element">
          <Link className="item" to="/">
            Surreal Estate
          </Link>
        </li>
        <li className="nav-element">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="nav-element">
          <Link className="item" to="/add-properties">
            Add Properties
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
