import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postFav } from "../actions";
import AppraiseForm from "./AppraiseForm";
import ResultCard from "./ResultCard";
import { useSpring, animated } from "react-spring";
import axios from "axios";

import ResultSave from "./ResultSave";
import InterestForm from "./InterestForm";

//temp imports until we're ready to modify Brianna's code
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const dummyData = [
  {
    id: 1,
    zipCode: 90210,
    yearBuilt: 1960,
    squareFootage: 1000,
    bedrooms: 10,
    bathrooms: 5.5,
    value: 100500
  },
  {
    id: 2,
    zipCode: 10024,
    yearBuilt: 1975,
    squareFootage: 2500,
    bedrooms: 1,
    bathrooms: 0.5,
    value: 100500
  },
  {
    id: 3,
    zipCode: 60007,
    yearBuilt: 1920,
    squareFootage: 5200,
    bedrooms: 3,
    bathrooms: 2,
    value: 100500
  }
];

const Result = ({ history, values, errors, touched, status }) => {
  console.log("HISTORY FROM RESULT: ", history)
  let example = history.location.state;
  // const dollarValue = example.price.toString();
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 1, tension: 140, friction: 70 }
  });

  const appraiseNew = () => {
    history.push("/appraise");
  }  

  return (
    example,
    (
      <>
        <animated.div className="result-card" style={fadeIn}>
          <ResultCard house={example} />
          <div className="result-form">
            <Form>
              <Field type="text" name="title" placeholder="Name your saved result" />
                {touched.title && errors.title && (
                  <p className="error">{errors.title}</p>
                )}
              <Field component="select" className="form-select" name="interestLevel">
                <option>Do you like it?</option>
                <option value="5">🤩</option>
                <option value="4">😃</option>
                <option value="3">🙂</option>
                <option value="2">😐</option>
                <option value="1">🤔</option>
              </Field>
                {touched.interestLevel && errors.interestLevel && (
                  <p className="error">{errors.interestLevel}</p>
                )}
              <div className="saveform-row">
                <button type="submit">Save Result</button>
              </div>
            </Form>
          </div>
        </animated.div>
        <animated.div className="result-card" style={fadeIn} onClick={appraiseNew}>
          <h2>Want to appraise another house?</h2>
          <br /><br />
          <button className="secondary-button">Appraise Again</button>
        </animated.div>
      </>
    )
  );
  // return (
  //   <>
  //     <animated.div className="result-card" style={fadeIn}>
  //       <ResultCard house={example} />
  //       <InterestForm />
  //       <div className="size-box">{/* <ResultSave /> */}</div>
  //     </animated.div>

  //     <animated.div className="form-container" style={fadeIn}>
  //       <h2>Re-appraise</h2>
  //       <AppraiseForm />
  //     </animated.div>
  //   </>
  // );;
};
const FormikSaved = withFormik({
  mapPropsToValues({ title, interestLevel }) {
    return {
      title: title || "",
      interestLevel: interestLevel || ""
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .typeError("Please name your entry")
      .required("Please name your entry"),
    interestLevel: Yup.number()
      .typeError("Please select level of interest")
      .required("Please select level of interest")
  }),
  handleSubmit(values, { props, resetForm }) {
    // console.log("RESULT: SAVED FORM: PROPS: ", props);
    // console.log("RESULT: SAVED FORM: HOUSEID: ", props.history.location.state.id);
    const postThisObj = {
      name: values.title,
      interestLevel: Number(values.interestLevel),
      userID: props.decoded,
      //add houseID
      houseID: props.history.location.state.id
    };
    props.postFav(postThisObj);
    resetForm();
  }
})(Result);

const mapStateToProps = state => {
  // console.log("result: mstp: state: ", state.decodedToken.token.id);
  return {
    decoded: state.decodedToken.token.id
  };
};

export default connect(
  mapStateToProps,
  { postFav }
)(FormikSaved);
