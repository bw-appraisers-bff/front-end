import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "../utils/PrivateRoute.js";

//components
import Signup from "./Signup";
import Appraise from "./Appraise";
import FormikSaved from "./Result";
import SavedList from "./SavedList";
import FormikLogin from "./Login";
import AboutUs from "./AboutUs";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <PrivateRoute path="/appraise" component={Appraise} />
          <PrivateRoute path="/result" component={FormikSaved} />
          <PrivateRoute path="/saved" component={SavedList} />
          <PrivateRoute path="/aboutus" component={AboutUs} />
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

        <Route path="/aboutus" component={AboutUs} />
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
