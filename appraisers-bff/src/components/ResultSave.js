import React, { useState, useEffect } from 'react';
import {useSpring, useTransition, animated } from 'react-spring'

const ResultSave = () => {

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
    ? <animated.div style={props} onClick={clickHandler} className="size-box">
        <button>Save Result?</button>
        </animated.div>
    : <animated.div style={props} className="size-box">
        <span>Form will go here</span><button>Submit</button>
        </animated.div>
    );
}

export default ResultSave;

