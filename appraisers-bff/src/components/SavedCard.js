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

  return (
    <animated.div key={id} className="result-card" style={fadeIn}>
      {/* <div className="size-box">
        <SaveEdit name={name} interestLevel={interestLevel} />
      </div> */}
      <h2>{`Name: ${name} Interest: ${interestLevel}`}</h2>
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
      <Form>
        <Field type="text" name="title" placeholder="Title" />
        {touched.title && errors.title && (
          <p className="error">{errors.title}</p>
        )}
        <Field type="text" name="interestLevel" placeholder="50" />
        {touched.interestLevel && errors.interestLevel && (
          <p className="error">{errors.interestLevel}</p>
        )}
        <button type="submit" className="edit-btn">
          Edit
        </button>
      </Form>
      <button
        onClick={() => handleDelete()}
      >
        Delete
      </button>
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
    title: Yup.string(),
    interestLevel: Yup.string()
  }),
  handleSubmit(values, { props }) {
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
