import React from 'react';
import { animated } from 'react-spring'

import ResultCard from './ResultCard'

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
