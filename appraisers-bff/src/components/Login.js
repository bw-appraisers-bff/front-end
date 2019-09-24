import React, { useState, useEffect } from "react";
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
      setLoginForm({ ...loginForm, status });
    }
  }, [status]);

  // const handleChanges = event => {
  //   setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  // };

  const submitForm = event => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users/")
      .then(res => console.log("login response", res))
      .catch(e => console.log(e));
    setLoginForm(initialState);
  };
  // look into making a unified userform to DRY code

  return (
    <div className="container login">
      <div className="form-container">
        <h2>Login</h2>
        <Form onSubmit={submitForm}>
          <Field type="text" name="username" placeholder="Username" />
          <Field type="password" name="password" placeholder="password" />
          <div className="button-container">
            <button>Login</button>
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
  handleSubmit(values, { resetForm, setStatus }) {
    // event.preventDefault();
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(setStatus(res))
        setStatus(res)
        console.log("login response", res) })
      .catch(e => console.log(e));
    resetForm( { username: "", password: "" });
  }
})(Login);

export default FormikLogin;
