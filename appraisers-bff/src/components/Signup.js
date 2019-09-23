import React from "react";

const Signup = () => {
  return (
    <div className="container signup">
      <div className="form-container">
        <h2>Signup</h2>
        <form name="signup-form">
          <label name="username">
            <input type="text" name="username" placeholder="Username" />
          </label>
          <label name="pass">
            <input type="password" placeholder="Password" />
          </label>
          <label name="confirm-pass">
            <input type="password" placeholder="Confirm Password" />
          </label>
          <div className="button-container">
            <button>Login</button>
            <a href="#">Forgot Password?</a>
          </div>
          <p className="join-text">Don't have an account? Join Now</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
