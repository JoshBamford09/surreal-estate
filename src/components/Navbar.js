import React from "react";
import Logo from "../../public/images/logo.png";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>
    </Nav>
  );
};

export default Navbar;
