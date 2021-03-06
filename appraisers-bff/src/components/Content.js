import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "../utils/PrivateRoute.js";
import axios from 'axios';

//components
import Signup from "./Signup";
import Appraise from "./Appraise";
import FormikSaved from "./Result";
import SavedList from "./SavedList";
import FormikLogin from "./Login";
import AboutUs from "./AboutUs";
import SplashPage from "./SplashPage";


class Content extends React.Component {

  componentDidMount() {
    //wake up backend and datascience model
    axios
    .get("https://appraisersbff.herokuapp.com")
    .then(res => {
      console.log("backend awake", res)
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content">

        <Switch>
          <PrivateRoute path="/appraise" component={Appraise} />
          <PrivateRoute path="/result" component={FormikSaved} />
          <PrivateRoute path="/saved" component={SavedList} />
          {/* <PrivateRoute path="/aboutus" component={AboutUs} /> */}
          <Route path="/login" component={FormikLogin} />
        </Switch>

        <Route
          path="/signup"
          component={this.props.isLoggedIn ? Appraise : Signup}
        />

        <Route
          exact
          path="/"
          component={this.props.isLoggedIn ? Appraise : SplashPage }
        />

        <Route
          path="/about" 
          component={AboutUs}
        />
        {/* Test routes for react-router-dom */}
        {/* <div>
          <span>Test routes:</span>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/appraise">Appraise</NavLink>
          <NavLink to="/result">Result</NavLink>
          <NavLink to="/saved">Saved</NavLink>
        </div> */}

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
