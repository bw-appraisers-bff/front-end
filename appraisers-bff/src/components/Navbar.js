import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    // window.location.reload()
  }

  //setting props.isLoggedIn to true
  //   props.isLoggedIn = true;
  function NavLinks() {
    if (!props.isLoggedIn) {
      return (
        <div className="nav-links">
          <NavLink to="/AboutUs">About Us</NavLink>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      );
    } else {
      return (
        <div className="nav-links">
          <NavLink to="/AboutUs">About Us</NavLink>
          <NavLink to="/appraise">Appraise</NavLink>
          <NavLink to="/saved">Saved List</NavLink>
          <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
        </div>
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
          <NavLinks />
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {isToggled: state.isToggled}
}

export default connect(mapStateToProps)(Navbar);
