import React from 'react';
import ResultCard from './ResultCard'

const SavedCard = props => {
  const { id, name, interestLevel, house } = props.result;
  console.log("SavedCard in SavedList", props)
  return (
    <div className="result-card">
      <div className="data-wrapper">
        <h2>{`Name: ${name}`}</h2>
        <h2>{`Interest Level: ${interestLevel}`}</h2>
      </div>
      <ResultCard house={house} />
    </div>
  );
};

export default SavedCard;
