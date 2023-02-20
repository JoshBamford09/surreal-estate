import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-elements">
          <img src={Logo} alt="logo" className="logo" />
        </li>
        <li>
          <Link className="item" to="/">
            Surreal Estate
          </Link>
        </li>
        <li className="nav-elements">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="nav-elements">
          <Link className="item" to="/add-properties">
            Add Properties
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
