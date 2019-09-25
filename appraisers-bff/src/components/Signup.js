import React from "react";
import { connect } from 'react-redux';
import { signUp } from '../actions'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = ({ values, errors, touched, status }) => {
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
            <button type="submit">Sign Up</button>
            <Link to="/login">Already have an account?</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

//checks if two inputs are equal to each other
function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg || "",
    params: {
      reference: ref.path
    },
    test: function(value) {
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
  handleSubmit(values, { resetForm, setStatus, props }) {
    console.log("SIGNUP: VALUES: ", values)
    console.log("SIGNUP: PROPS: ", props.signUp)
    const user = {
      username: values.username,
      password: values.password
    }
    console.log(user)
    // axios
    //   .post("https://reqres.in/api/users/", values)
    //   .then(res => {
    //     setStatus(res);
    //     console.log("signup response", res);
    //   })
    //   .catch(e => console.log(e));
    props.signUp(user)
    props.history.push('/login');
    // resetForm({ username: "", password: "", confirmation: "" });
  }
})(Signup);

export default connect(null, { signUp })(FormikSignup);
