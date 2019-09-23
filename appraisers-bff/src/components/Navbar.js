import React from "react";

const Navbar = props => {
  //setting props.isLoggedIn to true
  //   props.isLoggedIn = true;
  function NavLinks() {
    if (!props.isLoggedIn) {
      return (
        <div className="navbar-links-signin">
          <a>Log In</a>
          <a>Sign Up</a>
        </div>
      );
    } else {
      return (
        <div className="navbar-links-signin">
          <a>Home</a>
          <a>Appraise</a>
          <a>Saved List</a>
        </div>
      );
    }
  }
  return (
    <div className="navbar">
      <nav>
        <div className="navbar-img">
          <div className="icon-wrapper">
            <img src="images/nav-logo.png" alt="Appraisers bff logo"></img>
          </div>
        </div>
        <NavLinks />
      </nav>
    </div>
  );
};

export default Navbar;
