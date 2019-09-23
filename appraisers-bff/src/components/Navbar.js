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
            <img src="images/house-logo.png" alt="bff-icon"></img>
          </div>
          {/* <img src="images/bff-logo.png" alt="bff-appraiser-logo"></img> */}
          <div className="logo-wrapper">
            <p>BFF Appraisers </p>
          </div>
        </div>
        <NavLinks />
        {/* so do I put the conditonal rendering of links here? */}
      </nav>
    </div>
  );
};

export default Navbar;
