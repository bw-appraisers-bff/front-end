import React from "react";

const Login = () => {
  return (
    <div className="container login">
      <div className="form-container">
        <p>Login</p>
        <form name="login-form">
          <label name="username">
            <input type="text" name="username" placeholder="Username" />
          </label>
          <label name="pass">
            <input type="password" placeholder="password" />
          </label>
          <div className="button-container">
            <button>Login</button>
            <a hrerf="#">Forgot Password?</a>
          </div>
          <p>
            Don't have an <span>account</span>? Join Now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
