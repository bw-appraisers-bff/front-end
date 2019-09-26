import React, { useState, useEffect } from 'react';
import {useSpring, useTransition, animated } from 'react-spring'

const SaveEdit = (props) => {

    const name = props.name;
    const interestLevel = props.interestLevel;
    const [toggle, set] = useState(true);
    const clickHandler = () => set(!toggle);
    const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { mass: 1, tension: 280, friction: 70 }
    });
    

    return transitions.map(({ item, key, props }) => 
    item
    ? <animated.div style={props} className="size-box">
        <h2>{`Name: ${name} Interest: ${interestLevel}`}<button onClick={clickHandler}>Edit?</button></h2>
        </animated.div>
    : <animated.div style={props} className="size-box">
        <span>Form will go here</span><button onClick={clickHandler}>Submit</button>
        </animated.div>
    );
}

export default SaveEdit;

