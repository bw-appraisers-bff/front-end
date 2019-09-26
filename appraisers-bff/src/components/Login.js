import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { withFormik, Form, Field } from "formik";
import { useSpring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

<<<<<<< HEAD
const Login = ({ history, values, errors, touched, status }) => {
  // console.log("LOGIN: ", history)
=======
const Login = ({ values, errors, touched, status }) => {

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 1, tension: 140, friction: 70 }
  });

>>>>>>> 3689900ddaabcc6d92ab25dcf382b11a5b25a76a
  return (
    <animated.div style={fadeIn} className="login">
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
            <button type="submit" className="primary-button">
              Log in
            </button>
          </div>
        </Form>
        <div className="button-container">
          <span>Don't have an account?</span>
<<<<<<< HEAD
          <a href="/signup">
            <button type="button" className="secondary-button">
              Get Started
            </button>
          </a>
=======
          <NavLink to="/signup">
            <button type="button" className="secondary-button" >Get Started</button>
          </NavLink>
>>>>>>> 3689900ddaabcc6d92ab25dcf382b11a5b25a76a
        </div>
      </div>
    </animated.div>
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
  handleSubmit(values, { resetForm, props }) {
    // console.log("LOGIN PROPS: ", props);
    props.login(values, props.history);
    resetForm({ username: "", password: "" });
  }
})(Login);

const mapStateToProps = state => {
  return {
    isLogginIn: state.login.isLogginIn,
    isLoggedIn: state.login.isLogginIn,
    error: state.login.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(FormikLogin);
