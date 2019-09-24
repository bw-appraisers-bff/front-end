import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { postHouse } from '../actions';
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Appraise = ({ errors, touched, values, status }) => {  
    return (
    <div className="form-container">
    <h1>Appraise Now</h1>
    <Form>
        <Field type="text" name="sqft" placeholder="Square Footage" />
        {touched.sqft && errors.sqft && <p className="error">{errors.sqft}</p>}

        <Field type="text" name="yearbuilt" placeholder="Year Built" />
        {touched.yearbuilt && errors.yearbuilt && <p className="error">{errors.yearbuilt}</p>}

        <Field component="select"  className="form-select" name="bedrm" >
            <option>Select number of Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </Field>
        {touched.bedrm && errors.bedrm && <p className="error">{errors.bedrm}</p>}
        
        <Field component="select" className="form-select" name="bathrm">
            <option>Select number of Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </Field>
        {touched.bathrm && errors.bathrm && <p className="error">{errors.bathrm}</p>}
        
        <Field component="select" className="form-select" name="zipcode">
            <option>Zip Code</option>
            <option value="12345">12345</option>
            <option value="12345">12345</option>
            <option value="12345">12345</option>
        </Field>
        {touched.zipcode && errors.zipcode && <p className="error">{errors.zipcode}</p>}

      <button type="submit">Submit!</button>
    </Form>
  </div>
  );
};
  
// Higher Order Component - HOC
// Hard to share component / stateful logic (custom hooks)
// There is LOTs of shared logic between multiple components, and since we only want to write that logic one time and put it in one place and then extend that logic across thos ediffenet components
//HOC helps us with them that problem 👆
// Function that takes in a component, extends some logic onto that component,
// This function is actually going to call this function twice. This is called currying functions(We won't go over all that that entails today)
// returns a _new_ component (copy of the passed in component with the extended logic)

const FormikAppraise = withFormik({
// object destructuring. We could do values.species but we are destructuring it so we can just put species. You see the same thing in Props a lot so instead of props.values you would see {values}
mapPropsToValues({ sqft, yearbuilt, bedrm, bathrm, zipcode }) {
    return {
    sqft: sqft || "",
    yearbuilt: yearbuilt || "",
    bedrm: bedrm || "",
    bathrm: bathrm || "",
    zipcode: zipcode || ""
    };
},

validationSchema: Yup.object().shape({
    sqft: Yup.number()
        .typeError("Please enter the number of square feet")
        .positive("Please enter the number of square feet")
        .required("Please enter the number of square feet"),
    yearbuilt: Yup.number()
        .typeError("Please enter the year built")
        .positive("Please enter the year built")
        .required("Please enter the year built"),
    bedrm: Yup.number()
        .positive("Please select the number of bedrooms")
        .required("Please select the number of bedrooms"),
    bathrm: Yup.number()
        .positive("Please select the number of bathrooms")
        .required("Please select the number of bathrooms"),
    zipcode: Yup.number()
        .positive("You must enter a number")
        .required("You must enter a number")
}),

handleSubmit(values, { setStatus, resetForm, props }) {
    console.log("handleSubmit: props: ", props)
    props.postHouse(values)
    resetForm('');
}
})(Appraise); // currying functions in Javascript

const mapStateToProps = state => {
    console.log("MPSTP: STATE: ", state.house)
    return{
        house: state.house
    }
}

export default connect(mapStateToProps, { postHouse })(FormikAppraise);