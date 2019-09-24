import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, setStatus } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ values, errors, touched, status }) => {
  const initialState = {
    username: "",
    password: ""
  };

  const [loginForm, setLoginForm] = useState(initialState);

  // useEffect(() => {
  //   if (status) {
  //     setLoginForm({ status });
  //   }
  // }, [status]);

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
            <Link to="/">Forgot Password?</Link>
          </div>
          <Link to="/signup">
            <p>
              Don't have an <span>account</span>? Join Now
            </p>
          </Link>
        </Form>
      </div>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
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
        setStatus(res);
        console.log("login response", res);
      })
      .catch(e => console.log(e));
    resetForm({ username: "", password: "" });
  }
})(Login);

export default FormikLogin;
