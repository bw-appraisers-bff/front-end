import React, { useState, useEffect } from "react";
import { animated } from "react-spring";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import ResultCard from "./ResultCard";
import SaveEdit from "./SaveEdit";
import InterestForm from "./InterestForm";
import { connect } from "react-redux";
import { putFav, deleteFav } from "../actions";

//saved card still needs the history from result to display
//we could save that to a local useState to be passed to a saved list
//and then we could edit and delete name and interest level for saved.

const SavedCard = ({
  decodedToken,
  deleteFav,
  isToggled,
  flipSwitch,
  result,
  match,
  favorites,
  fadeIn,
  values,
  errors,
  touched,
  status
}) => {
  const {
    id,
    name,
    interestLevel,
    zipCode,
    squareFootage,
    yearBuilt,
    bedrooms,
    bathrooms,
    price
  } = result;

  // const { match, favorites } = props;

  const [card, setCard] = useState();

  useEffect(() => {
    const thisID = match.params.id;
    const cardToUpdate = favorites.find(
      favorite => `${favorite.id}` === thisID
    );
    if (cardToUpdate) {
      console.log(cardToUpdate);
      setCard(cardToUpdate);
    }
  }, [match, favorites, isToggled]);

  const handleDelete = () => {
    console.log(result.id);
    deleteFav(result.id,);
    flipSwitch();
  };

  const emojiInterest = (input) => {
    if (input === 1) {
      return "🤔";
    } if (input === 2) {
      return "😐";
    } if (input === 3) {
      return "🙂";
    } if (input === 4) {
      return "😃";
    } if (input === 5) {
      return "🤩";
    } else {
      return input;
    }
  }

  return (
    <animated.div key={id} className="result-card" style={fadeIn}>
      {/* <div className="size-box">
        <SaveEdit name={name} interestLevel={interestLevel} />
      </div> */}
      <h2>{`Saved Result: `}<span className="underline">{`${name}`}</span></h2>
      <h3>{`Interest Level: ${emojiInterest(interestLevel)}`}</h3>
      {/* <InterestForm /> */}
      <ResultCard
        // price={price}
        // bedrooms={bedrooms}
        // bathrooms={bathrooms}
        // yearBuilt={yearBuilt}
        // squareFootage={squareFootage}
        // zipCode={zipCode}
        house={result}
      />
      <div className="result-form">
        <Form>
          <Field type="text" name="title" placeholder="Edit saved result's name" />
            {touched.title && errors.title && (
              <p className="error">{errors.title}</p>
            )}
          <Field component="select" className="form-select" name="interestLevel">
            <option>Change your feelings?</option>
            <option value="5">🤩</option>
            <option value="4">😃</option>
            <option value="3">🙂</option>
            <option value="2">😐</option>
            <option value="1">🤔</option>
          </Field>
            {touched.interestLevel && errors.interestLevel && (
              <p className="error">{errors.interestLevel}</p>
            )}
          <div className="editform-row">
            <button type="submit">Update</button>
            <h3 className="spacer">or</h3>
            <button
            onClick={() => handleDelete()}
            className="delete-button"
          >
            Delete
          </button>
        </div>
        </Form>
      </div>
    </animated.div>
  );
};

const FormikUpdateInterests = withFormik({
  mapPropsToValues({ title, interestLevel }) {
    return {
      title: title || "",
      interestLevel: interestLevel || ""
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .typeError("Please name your entry")
      .required("Please name your entry"),
    interestLevel: Yup.number()
      .typeError("Please select level of interest")
      .required("Please select level of interest")
  }),
  handleSubmit(values, { props, resetForm }) {
    console.log("SAVEDCARD: PUT: PROPS: ", props);
    // console.log("RESULT: SAVED FORM: HOUSEID: ", props.history.location.state.id);
    const postThisObj = {
      name: values.title,
      interestLevel: Number(values.interestLevel),
      userID: props.decoded,
      //add houseID
      houseID: props.result.houseID
    };
    const putThisId = props.result.id;
    props.putFav(putThisId, postThisObj);
    props.flipSwitch();
    resetForm();
  }
})(SavedCard);

const mapStateToProps = state => {
  console.log("SavedCard: mstp: state: ", state);
  return {
    decoded: state.decodedToken.token.id,
    isToggled: state.isToggled,
  };
};

export default connect(
  mapStateToProps,
  { putFav, deleteFav }
)(FormikUpdateInterests);
