import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import PrivateRoute from '../utils/PrivateRoute.js';

//components
import FormikLogin from "./Login";
import Signup from "./Signup";
import Appraise from "./Appraise";
import Result from "./Result";
import Saved from "./Saved";
import SavedList from "./SavedList";
import Login from "./Login";

const Content = () => {
  return (
    <div className="content">

      {/* UNAUTHENTICATED ROUTES */}

      {/*Route for login page on "/" path or "/login" */}
      <Route exact path="/" component={FormikLogin} />

      <Route path="/login" component={FormikLogin} />

      {/*Route for sign up page on "/signup" path */}
      <Route path="/signup" component={Signup} />
      
      <div>
        <span>Test routes:</span>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/appraise">Appraise</NavLink>
        <NavLink to="/result">Result</NavLink>
        <NavLink to="/Saved">Saved</NavLink>
      </div>

      <Switch>
       <PrivateRoute path='/appraise' component={Appraise} />
       <PrivateRoute path="/result" component={Result} />
       <PrivateRoute path="/saved" component={SavedList} />
       <Route path="/login" component={FormikLogin} />
     </Switch>

    </div>
  );
};

export default Content;
