import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import PrivateRoute from '../utils/PrivateRoute.js';

//components
import Signup from "./Signup";
import Appraise from "./Appraise";
import Result from "./Result";
import Saved from "./Saved";
import SavedList from "./SavedList";
import Login from "./Login";

const Content = () => {
  const [credentials, setCredentials] = useState("boo");

  return (
    <div className="content">
      {/* UNAUTHENTICATED ROUTES */}

      <Route exact path="/" render={(props) => (
        <Signup {...props} credentials={credentials} setCredentials={setCredentials} />
      )} />
      <Route path="/signup" component={Signup} />       
      <Route path="/login" component={Login} />

      
      
      {/* AUTHENTICATED ROUTES */}

      <Switch>
       <PrivateRoute path='/appraise' component={Appraise} />
       <PrivateRoute path="/result" component={Result} />
       <PrivateRoute path="/saved" component={SavedList} />
     </Switch>

     
      <div>
       <span>Test routes:</span>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/appraise">Appraise</NavLink>
        <NavLink to="/result">Result</NavLink>
        <NavLink to="/Saved">Saved</NavLink>
      </div>

    </div>
  );
};

export default Content;
