import React from 'react';
import { connect } from 'react-redux';
import { postHouse } from '../actions'
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import PrivateRoute from '../utils/PrivateRoute';

const Appraise = ({ errors, touched, values, status }) => {  
    return (
    <Form>
        <Field type="text" name="squareFootage" placeholder="Square Footage" />
        {touched.squareFootage && errors.squareFootage && <p className="error">{errors.squareFootage}</p>}

        <Field type="text" name="yearbuilt" placeholder="Year Built" />
        {touched.yearbuilt && errors.yearbuilt && <p className="error">{errors.yearbuilt}</p>}
        {/*Hello world */}
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
mapPropsToValues({ squareFootage, yearbuilt, bedrm, bathrm, zipcode }) {
    return {
    squareFootage: squareFootage || "",
    yearbuilt: yearbuilt || "",
    bedrm: bedrm || "",
    bathrm: bathrm || "",
    zipcode: zipcode || ""
    };
},

validationSchema: Yup.object().shape({
    squareFootage: Yup.number()
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
    console.log("Appraise Form: Props: ", props)
    console.log("Appraise Form: Values: ", values)
    // console.log("Parsing attempt: ", Number(values))
    Object.keys(values).forEach(i => console.log(parseInt(i, 10)))
    const house = {
        squareFootage: Number(values.squareFootage),
        yearBuilt: Number(values.yearbuilt),
        zipCode: Number(values.zipcode),
        bedrooms: Number(values.bedrooms),
        bathrooms: parseFloat(values.bathrooms)
    }
    console.log('houseObj: ', house)
    // axios
    // // values is our object with all our data on it.
    // .post("https://reqres.in/api/users/", values)
    // .then(res => {
    //     setStatus(res.data);
    //     console.log(res);
    // })
    // .catch(err => console.log(err.response));
    props.postHouse(house)
    resetForm('');
}
})(Appraise); // currying functions in Javascript

export default connect(null, { postHouse })(FormikAppraise);