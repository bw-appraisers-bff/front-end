//libraries and frameworks
import React from "react";
import { connect } from "react-redux";

//style
import "./App.scss";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

class App extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="app-container">
        {/*NAVBAR COMPONENT: authenticated vs unauthenticated rendering */}
        <Navbar isLoggedIn={this.props.isLoggedIn} />

        {/* Content COMPONENT: authenticated vs unauthenticated rendering */}
        <Content />

        {/*FOOTER COMPONENT*/}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
