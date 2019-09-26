import React from "react";

const ResultCard = props => {
  console.log("Result Cards: Props: ", props);
  const {
    zipCode,
    yearBuilt,
    bedrooms,
    bathrooms,
    price,
    squareFootage
  } = props;

  // const dollarValue = price.toString();

  return (
    <div className="result-data">
      <h2>{`Appraised at $${price}`}</h2>
      <p>Your Appraisal Inputs:</p>
      <p>
        {`${squareFootage} square foot home, built in ${yearBuilt} in zip code ${zipCode}`}
      </p>
      <p>{`With ${bedrooms} bedrooms and ${bathrooms} bathrooms`}</p>
    </div>
  );
};

export default ResultCard;
