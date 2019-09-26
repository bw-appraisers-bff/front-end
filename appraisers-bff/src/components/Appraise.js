import React from 'react';
import AppraiseForm from './AppraiseForm'
import {useSpring, animated } from 'react-spring'


const Appraise = () => { 
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { mass: 1, tension: 140, friction: 70 }
      });

    return (
        <animated.div className="form-container" style={fadeIn}>
            <h2>Appraise Now</h2>
            <AppraiseForm />
        </animated.div>
    );
    }

export default Appraise
