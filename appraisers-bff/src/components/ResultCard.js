import React from 'react';

const ResultCard = props => {
  const { id, zipCode, yearBuilt, squareFootage, bedrooms, bathrooms, value } = props.house;
  console.log("SavedCard in SavedList", props)

  const dollarValue = value.toLocaleString();

  return (
    <div className="result-data">
      <h1>{`Appraised at $${dollarValue}`}</h1>
      <p>Your Appraisal Inputs:</p>
      <p>
        {`${squareFootage} square foot home, built in ${yearBuilt} in zip code ${zipCode}` }
      </p>
      <p>
        {`With ${bedrooms} bedrooms and ${bathrooms} bathrooms` }
      </p>
    </div>
  );
};

export default ResultCard;
