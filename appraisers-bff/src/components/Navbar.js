import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  const logout = () => {
    localStorage.removeItem("token");
    console.log("In logout function", props)
    // props.history.push("/login")
  };

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
          {/* <NavLink to="/login">Logout</NavLink> */}
          <button type="button" onClick={logout}>Logout</button>
          {/* <NavLink onClick={() => logout()} to="/login">
            Logout
          </NavLink> */}
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

export default Navbar;
