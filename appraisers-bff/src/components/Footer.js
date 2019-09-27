import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode.js";

const Footer = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <span>Copyright Appraiser's BFF 2019</span>
        <div className="footer-links">
          <a href="https://www.pinterest.com">
            <img src="../../../images/PinterestNavLogo.png" />
          </a>
          <a href="https://www.twitter.com">
            <img src="../../../images/TwitterNavLogo.png" />
          </a>
          <a href="https://www.facebook.com">
            <img src="../../../images/FBNavLogo.png" />{" "}
          </a>
        </div>
        <div>
          <span>Dark Mode</span>
          <div className="dark-mode__toggle">
            <div
              onClick={toggleMode}
              className={darkMode ? "toggle toggled" : "toggle"}
            />
          </div>
        </div>
        <div className="footer-links">
          <Link to="/">Contact Us</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
