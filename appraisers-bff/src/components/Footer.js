import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <span>Copyright Appraiser's BFF 2019</span>
        <div className="footer-links">
          <a href="https://www.pinterest.com">P</a>
          <a href="https://www.twitter.com">T</a>
          <a href="https://www.facebook.com">F</a>
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
