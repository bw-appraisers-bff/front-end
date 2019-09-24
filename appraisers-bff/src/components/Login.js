import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ values, errors, touched, status }) => {
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
  handleSubmit(values, { resetForm, props }) {
    // event.preventDefault();
    console.log("VALUES",values)
    console.log("PROPS", props)
    props.login(values, props.history)
    resetForm({ username: "", password: "" });
  }
})(Login);

const mapStateToProps = state => {
  // console.log("LOGIN: MTSP: STATE: ", state)
  return{
    isLogginIn: state.login.isLogginIn,
    isLoggedIn: state.login.isLogginIn,
    error: state.login.error
  }
}

export default connect(mapStateToProps, { login })(FormikLogin);
