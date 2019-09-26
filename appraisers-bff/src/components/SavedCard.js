import React from "react";
import { animated } from "react-spring";

import ResultCard from "./ResultCard";
import SaveEdit from "./SaveEdit";
import InterestForm from "./InterestForm";

//saved card still needs the history from result to display
//we could save that to a local useState to be passed to a saved list
//and then we could edit and delete name and interest level for saved.

const SavedCard = props => {
  const { id, name, interestLevel, house } = props.result;
  console.log("SavedCard in SavedList", props);
  return (
    <animated.div className="result-card" style={props.fadeIn}>
      {/* <div className="size-box">
        <SaveEdit name={name} interestLevel={interestLevel} />
      </div> */}
      <h2>{`Name: ${name} Interest: ${interestLevel}`}</h2>
      <InterestForm />
      <ResultCard house={house} />
      <button>Delete</button>
    </animated.div>
  );
};

export default SavedCard;
