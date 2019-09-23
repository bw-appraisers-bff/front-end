import React from "react";

const Footer = () => {
  const todaysDate = new Date();
  return (
    <div className="footer">
      <h3>Copyright Appraiser's BFF {todaysDate.getFullYear}</h3>
      <div className="social-container">
        <a href="https://www.pinterest.com">P</a>
        <a href="https://www.twitter.com">T</a>
        <a href="https://www.facebook.com">F</a>
      </div>
      <div className="policy-container">
        <a>Contact Us</a>
        <a>Terms of Use</a>
        <a>Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
