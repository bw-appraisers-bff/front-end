import React, { useEffect } from 'react';
import AppraiseForm from './AppraiseForm'
import {useSpring, animated } from 'react-spring'
import axios from 'axios';

const Appraise = props => { 
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { mass: 1, tension: 140, friction: 70 }
      });

    useEffect(() => {
        //wake up datscience model 
        axios
            .get(`https://appraisers-bff.herokuapp.com/?&yearbuilt=1983&bedrooms=1&bathrooms=2&squarefeet=1800`)
            .then(res => {
            console.log("datascience model awake", res)
            })
            .catch(err => console.log(err));
        }, []);

    return (
        <animated.div className="form-container" style={fadeIn}>
            <h2>Appraise Now</h2>
            <AppraiseForm {...props}/>
        </animated.div>
    );
    }

export default Appraise
