import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  //setting props.isLoggedIn to true
  //   props.isLoggedIn = true;
  function NavLinks() {
    if (!props.isLoggedIn) {
      return (
        <div className="nav-links">
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/singup">Sign Up</NavLink>
        </div>
      );
    } else {
      return (
        <div className="nav-links">
          <NavLink to="/appraise">Appraise</NavLink>
          <NavLink to="/login">Saved List</NavLink>
        </div>
      );
    }
  }
  return (
    <div className="nav-wrapper">
        <nav className="navbar">
            <div className="navbar-img">
                <img src="images/nav-logo.png" alt="Appraisers bff logo"></img>
            </div>
            <NavLinks />
        </nav>
    </div>
  );
};

export default Navbar;
