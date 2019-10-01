import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    // window.location.reload()
  }

  const [displayed, setDisplayed] = useState(false);

  const toggleMenu = () => {
    console.log("button clicked");
    setDisplayed(!displayed);
    console.log("displayed is now", displayed);
  }

  //setting props.isLoggedIn to true
  //   props.isLoggedIn = true;
  function NavLinks() {
    if (!props.isLoggedIn) {
      return (
        <>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/appraise">Appraise</NavLink>
          <NavLink to="/saved">Saved List</NavLink>
          <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
        </>
      );
    }
  }

  const handleClick = () => {
    console.log(props.history);
  };

  return (
    <div className="nav-placeholder">
      <div className="nav-wrapper">
        <nav className="navbar">
          <div className="navbar-img" onClick={handleClick}>
            <NavLink to="/">
              <img src="images/nav-logo.png" alt="Appraisers bff logo" />
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLinks />
          </div>
          <div className="nav-links-mobile">
            <img src="../../../images/hamburger.png" onClick={toggleMenu} />
            <div className={displayed ? "mobile-links-displayed" : "mobile-links-hidden"} onClick={toggleMenu}>
              <NavLinks />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {isToggled: state.isToggled}
}

export default connect(mapStateToProps)(Navbar);
