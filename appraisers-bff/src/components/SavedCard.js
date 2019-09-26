import React from 'react';
import { animated } from 'react-spring'

import ResultCard from './ResultCard'

//saved card still needs the history from result to display
//we could save that to a local useState to be passed to a saved list
//and then we could edit and delete name and interest level for saved.

const SavedCard = props => {
  const { id, name, interestLevel, house } = props.result;
  console.log("SavedCard in SavedList", props)
  return (
    <animated.div className="result-card" style={props.fadeIn}>
      <div className="data-wrapper">
        <h2>{`Name: ${name}`}</h2>
        <h2>{`Interest Level: ${interestLevel}`}</h2>
      </div>
      <ResultCard house={house} />
    </animated.div>
  );
};

export default SavedCard;
