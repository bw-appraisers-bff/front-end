import React from 'react';
import AppraiseForm from './AppraiseForm'

const Appraise = (props) => {  
    return (
        <div className="form-container">
            <h2>Appraise Now</h2>
            <AppraiseForm {...props}/>
        </div>
    );
    }

export default Appraise
