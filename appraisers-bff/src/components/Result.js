<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import { getFav, getHouse, postFav } from "../actions";
import AppraiseForm from "./AppraiseForm";
import ResultCard from "./ResultCard";

// GOAL IS TO HAVE DATA FROM APPRAISE FORM RENDER HERE
//ALSO TO POPULATE FORM WITH PREVIOUS DATA -- STRETCH

const dummyData = [
  {
    id: 1,
    zipCode: 90210,
    yearBuilt: 1960,
    squareFootage: 1000,
    bedrooms: 10,
    bathrooms: 5.5,
    value: 100500
  },
  {
    id: 2,
    zipCode: 10024,
    yearBuilt: 1975,
    squareFootage: 2500,
    bedrooms: 1,
    bathrooms: 0.5,
    value: 100500
  },
  {
    id: 3,
    zipCode: 60007,
    yearBuilt: 1920,
    squareFootage: 5200,
    bedrooms: 3,
    bathrooms: 2,
    value: 100500
  }
];

const Result = props => {
  console.log("Result: Props: ", props.history.location.state);
  let example = props.history.location.state;
//   const dollarValue = example.price.toLocaleString();

  // props.getFav(props.decodedToken)
  //needs to be fixed
  // props.getHouse()
  //history.push() from appraise form with ID to get price and easier to populate previous data?

  // console.log("props.getHouse invoking", props.getHouse())
  // const data = props.getHouse();
  // console.log('DATA: ', data)

  const handleSaveSubmit = e => {
    e.preventDefault();
    // props.postFav()
  }
  return (
    <>
      <div className="result-card">
        <ResultCard house={example} />
        <button>Save Result</button>
      </div>

      <div className="form-container">
        <h2>Re-appraise</h2>
        <AppraiseForm />
      </div>
    </>
  );
};
//TEST APPLICATION 
// PROPS EXPECTED TO CARRY HOUSE DATA OVER IN HISTORY

const mapStateToProps = state => {
  console.log("MSTP: STATE: ", state.decodedToken);
  return {
    decodedToken: state.decodedToken,
    house: { priceOfHouse: state.priceOfHouse }
  };
};

export default connect(
  mapStateToProps,
  { getFav, getHouse, postFav }
)(Result);
=======
import React, { useState, useEffect } from 'react';
import AppraiseForm from './AppraiseForm'
import ResultCard from './ResultCard'
import {useSpring, animated } from 'react-spring'
import axios from 'axios';

const dummyData = [
    {"id":1,"zipCode":90210,"yearBuilt":1960,"squareFootage":1000,"bedrooms":10,"bathrooms":5.5,"value":100500},
    {"id":2,"zipCode":10024,"yearBuilt":1975,"squareFootage":2500,"bedrooms":1,"bathrooms":0.5,"value":100500},
    {"id":3,"zipCode":60007,"yearBuilt":1920,"squareFootage":5200,"bedrooms":3,"bathrooms":2,"value":100500}]

const Result = () => {
    let example = dummyData[0];
    const dollarValue = example.value.toLocaleString();

    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { mass: 1, tension: 140, friction: 70 }
      });
    useEffect(() => {
        axios.get(`https://appraisersbff.herokuapp.com/houses`).then(res => console.log("GETHOUSE RES", res)).catch(err => console.log(err))
    }, [])

    return(
        <>
            <animated.div className="result-card" style={fadeIn}>
                <ResultCard house={example} />
                <button>Save Result</button>
            </animated.div>

            <animated.div className="form-container" style={fadeIn}>
                <h2>Re-appraise</h2>
                <AppraiseForm />
            </animated.div>
        </>
    );
}

export default Result;
>>>>>>> 3689900ddaabcc6d92ab25dcf382b11a5b25a76a
