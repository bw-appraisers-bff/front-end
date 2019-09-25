import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute.js";

//components
import FormikLogin from "./Login";
import Signup from "./Signup";
import Appraise from "./Appraise";
import Result from "./Result";
import SavedList from "./SavedList";

const Content = () => {
  return (
    <div className="content">
      <div>
        <span>Test routes:</span>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/appraise">Appraise</NavLink>
        <NavLink to="/result">Result</NavLink>
        <NavLink to="/Saved">Saved</NavLink>
      </div>

      <Switch>
        <PrivateRoute path="/appraise" component={Appraise} />
        <PrivateRoute path="/result" component={Result} />
        <PrivateRoute path="/saved" component={SavedList} />
        <Route path="/login" component={FormikLogin} />
      </Switch>
      <Route path="/signup" component={Signup} />
    </div>
  );
};

export default Content;
