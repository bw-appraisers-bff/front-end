import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, setStatus } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

// ``.oneOf([Boom], "Passwords must match")

const Signup = ({ values, errors, touched, status }) => {
  const initialState = {
    username: "",
    password: "",
    confirmation: ""
  };

  const [signupForm, setSignupForm] = useState(initialState);

  // look into making a unified userform to DRY code
  return (
    <div className="container signup">
      <div className="form-container">
        <h2>Signup</h2>
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <Field
            type="password"
            name="confirmation"
            placeholder="Confirm Password"
          />
          {touched.confirmation && errors.confirmation && (
            <p className="error">{errors.confirmation}</p>
          )}
          <div className="button-container">
            <button>Sign Up</button>
            <Link to="/login">Already have an account?</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

function equalTo(ref: any, msg: any) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg || "${path} must be the same as ${reference}",
    params: {
      reference: ref.path
    },
    test: function(value: any) {
      return value === this.resolve(ref);
    }
  });
}

Yup.addMethod(Yup.string, "equalTo", equalTo);

const FormikSignup = withFormik({
  mapsPropsToValues({ username, password, confirmation }) {
    return {
      username: username || "",
      password: password || "",
      confirmation: confirmation || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be 8 characters minimum."),
    confirmation: Yup.string()
      .equalTo(Yup.ref("password"), "Passwords must be the same")
      .required("Please confirm your password")
  }),
  handleSubmit(values, { resetForm, setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res);
        console.log("signup response", res);
      })
      .catch(e => console.log(e));
    resetForm({ username: "", password: "", confirmation: "" });
  }
})(Signup);

export default FormikSignup;
