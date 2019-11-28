//libraries and frameworks
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

//style
import "./App.scss";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import HeroPage from './components/HeroPage.js'

const App = props => {
  return (
    <div className="app-container">
      {/*NAVBAR COMPONENT: authenticated vs unauthenticated rendering */}
      <Navbar {...props} isLoggedIn={props.isLoggedIn} />

      {/* Content COMPONENT: authenticated vs unauthenticated rendering */}
      <Content />

      {/*FOOTER COMPONENT*/}
      <Footer />

      {/* 
        Route for image for preview links
        added here so it does not have Nav and Footer
      */}
      <Route path="/heropage" component={HeroPage} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
