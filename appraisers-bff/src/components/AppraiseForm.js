import React from "react";
import { connect } from "react-redux";
import { postHouse } from "../actions";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Appraise = ({ errors, touched, values, status, history }) => {
    // console.log("APPRAISE: ", history)
  return (
    <Form>
      <Field type="text" name="squareFootage" placeholder="Square Footage" />
      {touched.squareFootage && errors.squareFootage && (
        <p className="error">{errors.squareFootage}</p>
      )}

      <Field type="text" name="yearbuilt" placeholder="Year Built" />
      {touched.yearbuilt && errors.yearbuilt && (
        <p className="error">{errors.yearbuilt}</p>
      )}
      {/*Hello world */}
      <Field component="select" className="form-select" name="bedrm">
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
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        <option value="2.5">2.5</option>
        <option value="3">3</option>
        <option value="3.5">3.5</option>
        <option value="4">4</option>
        <option value="4.5">4.5</option>
        <option value="5">5</option>
        <option value="5.5">5.5</option>
        <option value="6">6</option>
      </Field>
      {touched.bathrm && errors.bathrm && (
        <p className="error">{errors.bathrm}</p>
      )}

      <Field type="text" name="zipcode" placeholder="Enter 5 digit zip code."/>
      {touched.zipcode && errors.zipcode && (
        <p className="error">{errors.zipcode}</p>
      )}
      <div className="button-container">
        <button type="submit" className="primary-button">
          Appraise Now
        </button>
      </div>
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
      .min(650, "Minimum 650 sq.ft.")
      .max(10000, "You really don't have a house that big")
      .required("Please enter the number of square feet"),
    yearbuilt: Yup.number()
      .typeError("Please enter the year built")
      .positive("Please enter the year built")
      .required("Please enter the year built")
      .min(1900, "Enter year after 1900.")
      .max(2019, "2019 or earlier please."),
    bedrm: Yup.number()
      .positive("Please select the number of bedrooms")
      .required("Please select the number of bedrooms"),
    bathrm: Yup.number()
      .positive("Please select the number of bathrooms")
      .required("Please select the number of bathrooms"),
    zipcode: Yup.number()
      .positive("You must enter a number")
      .required("You must enter a number")
      .min(10000, "You must enter 5-digit zip code")
      .max(99999, "You must enter 5-digit zip code"),
  }),

  handleSubmit(values, { props }) {
    // console.log("Appraise Form: Props: ", props);
    // console.log("Appraise Form: Values: ", values);
    const aHouse = {
      zipCode: Number(values.zipcode),
      yearBuilt: Number(values.yearbuilt),
      squareFootage: Number(values.squareFootage),
      bedrooms: Number(values.bedrm),
      bathrooms: parseFloat(values.bathrm)
    };
    // console.log("history", props.history);
    props.postHouse(aHouse, props.history);
    // resetForm('');
  }
})(Appraise); // currying functions in Javascript

const mapStateToProps = state => {
//   console.log("Appraise: mstp: state.house: ", state.house);
//   console.log("Appraise: mstp: state.house: ", state.house.house);
  return {
    house: {
      priceOfHouse: state.priceOfHouse
    }
  };
};

export default connect(
  mapStateToProps,
  { postHouse }
)(FormikAppraise);
