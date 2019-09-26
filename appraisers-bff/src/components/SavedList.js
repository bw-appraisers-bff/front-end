import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { connect } from "react-redux";
import { getFav } from "../actions";

import SavedCard from "./SavedCard";

const SavedList = props => {
  const { getFav, decodedToken, favorites } = props;
  // console.log("favorites default", favorites);
  // console.log("SavedList: Props: ", props);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 1, tension: 140, friction: 70 }
  });

  const tokenObj = {
    username: decodedToken
  };

  // console.log("tokenObj ", tokenObj);
  useEffect(() => {
    // console.log("useEffect token ", tokenObj);
    getFav(tokenObj); //changes favorites props
    // setSavedResults(favorites);
  }, []);

  return (
    <div className="saved">
      {favorites.map(
        result => (
          <SavedCard
            {...props}
            result={result}
            key={result.id}
            fadeIn={fadeIn}
          />
        )
        // <Link to={`movies/${movie.id}`}>
        // <SavedCard  key={result.id} result={result}  />

        // </Link>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(
  //   "SavedList: mstp: state: decodedToken username: ",
  //   state.favorites
  // );
  return {
    decodedToken: state.decodedToken.token.username,
    favorites: state.favorites
  };
};

export default connect(
  mapStateToProps,
  { getFav }
)(SavedList);

// class SavedListClass extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             something: ''
//         }
//     } //maybe I don't need this with mapToProps??

//   render() {
//     return (
//       <div className="container saved-list">
//         <h1>Your saved searches</h1>
//         {/* {this.props.something.map(card => {
//             <Saved
//                 key={card.id}
//                 id={card.id}
//                 imgUrl={card.img_url}
//                 name={card.name}
//                 interest={card.interest}
//                 history={card.history}
//             />
//             //something like that.
//         })} */}
//       </div>
//     );
//   }
// }

// export default SavedList;
