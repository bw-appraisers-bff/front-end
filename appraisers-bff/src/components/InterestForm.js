import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const InterestForm = ({
  // Formik props
  errors,
  touched,
  value,
  status,

  //props destructuring
  values,
  decoded,
  history,
  postFav
}) => (
  <div>
    <Formik
      initialValues={{ name: "", rating: "" }}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = "Please name this entry";
        } else if (!errors.rating) {
          errors.rating = "Please rate your interest level for this entry.";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // console.log("RESULT: SAVED FORM: PROPS: ", props);
        // console.log("RESULT: SAVED FORM: HOUSEID: ", props.history.location.state.id);
        const postThisObj = {
          name: values.title,
          interestLevel: Number(values.interestLevel),
          userID: decoded,
          //add houseID
          houseID: history.location.state.id
        };
        postFav(postThisObj);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Please name this entry" />
          <ErrorMessage name="name" component="p" />
          <Field component="select" name="rating">
            <option>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
          <ErrorMessage name="rating" component="p" />
          <div className="button-container">
            <button
              type="submit"
              disabled={isSubmitting}
              className="primary-button"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default InterestForm;
