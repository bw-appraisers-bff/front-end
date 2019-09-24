import React from "react";
import Saved from "./Saved.js";

class SavedList extends React.Component {
  render() {
    return (
      <div className="container saved-list">
        <h1>Your saved searches</h1>
        {/* map over savedCards */}
        <Saved />
      </div>
    );
  }
}

export default SavedList;
