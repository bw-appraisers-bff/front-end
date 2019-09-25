import React, { useState, useEffect } from 'react';
import AppraiseForm from './AppraiseForm'
import ResultCard from './ResultCard'

const dummyData = [
    {"id":1,"zipCode":90210,"yearBuilt":1960,"squareFootage":1000,"bedrooms":10,"bathrooms":5.5,"value":100500},
    {"id":2,"zipCode":10024,"yearBuilt":1975,"squareFootage":2500,"bedrooms":1,"bathrooms":0.5,"value":100500},
    {"id":3,"zipCode":60007,"yearBuilt":1920,"squareFootage":5200,"bedrooms":3,"bathrooms":2,"value":100500}]

const Result = () => {
    let example = dummyData[0];
    const dollarValue = example.value.toLocaleString();

    useEffect(() => {
        axios.get(`https://appraisersbff.herokuapp.com/houses`).then(res => console.log("GETHOUSE RES", res)).catch(err => console.log(err))
    }, [])

    return(
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
}

export default Result;