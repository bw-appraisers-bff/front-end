import React from 'react';
import { animated } from 'react-spring'

import ResultCard from './ResultCard'
import SaveEdit from './SaveEdit'

const SavedCard = props => {
  const { id, name, interestLevel, house } = props.result;
  console.log("SavedCard in SavedList", props)
  return (
    <animated.div className="result-card" style={props.fadeIn}>
      <div className="size-box">
        <SaveEdit name={name} interestLevel={interestLevel} />
      </div>
      <ResultCard house={house} />
    </animated.div>
  );
};

export default SavedCard;
