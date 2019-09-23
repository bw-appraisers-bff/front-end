//libraries and frameworks
import React from "react";

//style
import "./App.scss";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      {/*NAVBAR COMPONENT: authenticated vs unauthenticated rendering */}
      <Navbar />

      {/* Content COMPONENT: authenticated vs unauthenticated rendering */}
      <Content />

      {/*FOOTER COMPONENT*/}
      <Footer />
    </div>
  );
}

export default App;
