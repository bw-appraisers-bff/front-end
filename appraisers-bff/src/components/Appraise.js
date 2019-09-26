import React from 'react';
import AppraiseForm from './AppraiseForm'
import {useSpring, animated } from 'react-spring'


const Appraise = () => { 
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { mass: 1, tension: 140, friction: 70 }
      });

<<<<<<< HEAD
const Appraise = (props) => {  
=======
>>>>>>> 3689900ddaabcc6d92ab25dcf382b11a5b25a76a
    return (
        <animated.div className="form-container" style={fadeIn}>
            <h2>Appraise Now</h2>
<<<<<<< HEAD
            <AppraiseForm {...props}/>
        </div>
=======
            <AppraiseForm />
        </animated.div>
>>>>>>> 3689900ddaabcc6d92ab25dcf382b11a5b25a76a
    );
    }

export default Appraise
