import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import PrivateRoute from "../utils/PrivateRoute.js";

//components
import Signup from "./Signup";
import Appraise from "./Appraise";
import Result from "./Result";
import SavedList from "./SavedList";
import FormikLogin from "./Login";

class Content extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="content">
        <div>
          <span>Test routes:</span>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/appraise">Appraise</NavLink>
          <NavLink to="/result">Result</NavLink>
          <NavLink to="/saved">Saved</NavLink>
        </div>

        <Switch>
          <PrivateRoute path="/appraise" component={Appraise} />
          <PrivateRoute path="/result" component={Result} />
          <PrivateRoute path="/saved" component={SavedList} />
          <Route
            path="/login"
            component={this.props.isLoggedIn ? Appraise : FormikLogin}
          />
        </Switch>

        <Route
          path="/signup"
          component={this.props.isLoggedIn ? Appraise : Signup}
        />

        <Route
          exact
          path="/"
          component={this.props.isLoggedIn ? Appraise : Signup}
        />
        {/* Note: is not rending "Appraise" even if "isLoggedIn" is true */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.isLoggedIn
  };
};

export default connect(mapStateToProps)(Content);
