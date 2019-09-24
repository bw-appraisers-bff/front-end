import React from "react";
import { NavLink, Route } from "react-router-dom";

//components
import FormikLogin from "./Login";
import Signup from "./Signup";
import Appraise from "./Appraise";
import Result from "./Result";
import Saved from "./Saved";

const Content = () => {
  return (
    <div className="container content">
      <h4>
        parent component for dynamically rendering content based on routes
      </h4>

      <div>
        <span>Test routes:</span>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/appraise">Appraise</NavLink>
        <NavLink to="/result">Result</NavLink>
        <NavLink to="/Saved">Saved</NavLink>
      </div>

      {/* UNAUTHENTICATED ROUTES */}

      {/*Route for login page on "/" path or "/login" */}
      <Route exact path="/" component={FormikLogin} />

      <Route path="/login" component={FormikLogin} />

      {/*Route for sign up page on "/signup" path */}
      <Route path="/signup" component={Signup} />

      {/* AUTHENTICATED ROUTES */}

      {/*Route for input page on "/appraise" path */}

      {/* "/" should now lead to "/appraise" after authentication */}
      <Route path="/appraise" component={Appraise} />

      {/*Route for output page on "/result" path */}
      <Route path="/result" component={Result} />

      {/*Route for dashboard page on "/saved" path */}
      <Route path="/saved" component={Saved} />
    </div>
  );
};

export default Content;
