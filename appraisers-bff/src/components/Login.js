import React from "react";
import { connect } from 'react-redux';
import { login } from '../actions';
import { withFormik, Form, Field } from "formik";
import { useSpring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const Login = ({ values, errors, touched, status }) => {

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 1, tension: 140, friction: 70 }
  });

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
            <button type="submit" className="primary-button">Log in</button>
          </div>
        </Form>
        <div className="button-container">
          <span>Don't have an account?</span>
          <NavLink to="/signup">
            <button type="button" className="secondary-button" >Get Started</button>
          </NavLink>
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
    props.login(values, props.history)
    resetForm({ username: "", password: "" });
  }
})(Login);

const mapStateToProps = state => {
  return{
    isLogginIn: state.login.isLogginIn,
    isLoggedIn: state.login.isLogginIn,
    error: state.login.error
  }
}

export default connect(mapStateToProps, { login })(FormikLogin);
