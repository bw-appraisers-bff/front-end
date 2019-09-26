import React from 'react';

const ResultCard = props => {
  console.log("Result Cards: Props: ", props)
  const {id, zipCode, yearBuilt, bedrooms, bathrooms, price, squareFootage} = props.house

  // const dollarValue = price.toString();

  return (
    <div className="result-data">
      <h1>{`Appraised at $${price}`}</h1>
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
