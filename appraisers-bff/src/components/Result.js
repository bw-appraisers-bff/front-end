import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postFav } from '../actions';
import AppraiseForm from './AppraiseForm'
import ResultCard from './ResultCard'
import {useSpring, animated } from 'react-spring'
import axios from 'axios';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';

const dummyData = [
    {"id":1,"zipCode":90210,"yearBuilt":1960,"squareFootage":1000,"bedrooms":10,"bathrooms":5.5,"value":100500},
    {"id":2,"zipCode":10024,"yearBuilt":1975,"squareFootage":2500,"bedrooms":1,"bathrooms":0.5,"value":100500},
    {"id":3,"zipCode":60007,"yearBuilt":1920,"squareFootage":5200,"bedrooms":3,"bathrooms":2,"value":100500}]

    const Result = ({history, values, errors, touched, status }) => {
      let example = history.location.state;
      const dollarValue = example.price.toLocaleString();
      const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { mass: 1, tension: 140, friction: 70 }
      });
      // useEffect(() => {
      //     axios.get(`https://appraisersbff.herokuapp.com/houses`).then(res => console.log("GETHOUSE RES", res)).catch(err => console.log(err))
      // }, [])
      return (
        <>
          <animated.div className="result-card" style={fadeIn}>
            <ResultCard house={example} />
            <Form>
              <Field type="text" name="title" placeholder="Title" />
              {touched.title && errors.title && (
                <p className="error">{errors.title}</p>
              )}
              <Field type="text" name="interestLevel" placeholder="69" />
              {touched.interestLevel && errors.interestLevel && (
                <p className="error">{errors.interestLevel}</p>
              )}
              <button type="submit">Save Result</button>
            </Form>
          </animated.div>
          <animated.div className="form-container" style={fadeIn}>
            <h2>Re-appraise</h2>
            <AppraiseForm />
          </animated.div>
        </>
      );
    };
    const FormikSaved = withFormik({
      mapPropsToValues({ title, interestLevel }){
        return{
          title: title || "",
          interestLevel: interestLevel || "",
        };
      },
      validationSchema: Yup.object().shape({
        title: Yup.string(),
        interestLevel: Yup.string(),
      }),
      handleSubmit(values, { props }) {
        console.log("RESULT: SAVED FORM: PROPS: ", props);
        const postThisObj = {
          name: values.title,
          interestLevel: values.interestLevel,
          userID: props.decoded,
        }
        props.postFav(postThisObj);
      }
    })(Result)

    const mapStateToProps = state => {
      console.log("result: mstp: state: ", state.decodedToken.token.id)
      return{
        decoded: state.decodedToken.token.id
      }
    }

    export default connect(
      mapStateToProps,
      { postFav }
    )(FormikSaved);
