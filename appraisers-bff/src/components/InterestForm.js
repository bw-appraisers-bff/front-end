import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const InterestForm = ({ errors, touched, value, status }) => (
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
