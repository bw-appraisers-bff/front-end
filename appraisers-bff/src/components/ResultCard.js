import React from "react";

const ResultCard = ({ house }) => {
  // console.log("Result Cards: Props: ", );
  const {
    zipCode,
    yearBuilt,
    bedrooms,
    bathrooms,
    price,
    squareFootage
  } = house;

  const dollarValue = price.toString();

  return (
    <div className="result-data">
      <h2>{`Appraised at $${dollarValue}`}</h2>
      <p>Your Appraisal Inputs:</p>
      <p>
        {`${squareFootage} square foot home, built in ${yearBuilt} in zip code ${zipCode}`}
      </p>
      <p>{`With ${bedrooms} bedrooms and ${bathrooms} bathrooms`}</p>
    </div>
  );
};

export default ResultCard;
