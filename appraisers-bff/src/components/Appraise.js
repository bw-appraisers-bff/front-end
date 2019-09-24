import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { postHouse } from '../actions';
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import AppraiseForm from './AppraiseForm'

const Appraise = () => {  
    return (
        <div className="form-container">
            <h2>Appraise Now</h2>
            <AppraiseForm />
        </div>
    );
    }

export default Appraise
