import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { login } from '../actions';
import { withFormik, Form, Field, setStatus } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = ({ values, errors, touched, status }) => {
  const initialState = {
    username: "",
    password: ""
  };

  const [loginForm, setLoginForm] = useState(initialState);

  useEffect(() => {
    if (status) {
      setLoginForm({ status });
    }
  }, [status]);

  // const handleChanges = event => {
  //   setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  // };

  return (
    <div className="container login">
      <div className="form-container">
        <h2>Login</h2>
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}

          <Field type="password" name="password" placeholder="password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <div className="button-container">
            <button type="submit">Login</button>
            <a hrerf="#">Forgot Password?</a>
          </div>
          <p>
            Don't have an <span>account</span>? Join Now
          </p>
        </Form>
      </div>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ name, password }) {
    return {
      name: name || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be 8 characters minimum")
  }),
  handleSubmit(event, values, props, { resetForm, setStatus }) {
    event.preventDefault();
    props.login({
      username: values.username,
      password: values.password
    })
    resetForm( { username: "", password: "" });
    props.history.push('/login');
  }
})(Login);

export default connect(null, { login })(FormikLogin);
