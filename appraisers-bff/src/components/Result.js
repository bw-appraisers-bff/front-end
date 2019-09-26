import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postFav } from '../actions';
import AppraiseForm from './AppraiseForm'
import ResultCard from './ResultCard'
import {useSpring, animated } from 'react-spring'
import axios from 'axios';

const dummyData = [
    {"id":1,"zipCode":90210,"yearBuilt":1960,"squareFootage":1000,"bedrooms":10,"bathrooms":5.5,"value":100500},
    {"id":2,"zipCode":10024,"yearBuilt":1975,"squareFootage":2500,"bedrooms":1,"bathrooms":0.5,"value":100500},
    {"id":3,"zipCode":60007,"yearBuilt":1920,"squareFootage":5200,"bedrooms":3,"bathrooms":2,"value":100500}]

const Result = props => {
    let example = props.history.location.state;
    // const dollarValue = example.price.toLocaleString();

    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { mass: 1, tension: 140, friction: 70 }
      });
    // useEffect(() => {
    //     axios.get(`https://appraisersbff.herokuapp.com/houses`).then(res => console.log("GETHOUSE RES", res)).catch(err => console.log(err))
    // }, [])

    const handleSaveSubmit = e => {
      e.preventDefault();
      props.postFav(example)
    }

    return(
        <>
            <animated.div className="result-card" style={fadeIn}>
                <ResultCard house={example} />
                <button onClick={handleSaveSubmit}>Save Result</button>
            </animated.div>

            <animated.div className="form-container" style={fadeIn}>
                <h2>Re-appraise</h2>
                <AppraiseForm />
            </animated.div>
        </>
    );
}

export default connect(null, { postFav })(Result);
