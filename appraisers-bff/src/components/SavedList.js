import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { connect } from "react-redux";
import { getFav } from "../actions";

import SavedCard from "./SavedCard";

const SavedList = props => {
  console.log("SavedList: Props: ", props);
  const dummyData = [
    {
      id: 1,
      name: "First Saved",
      interestLevel: 5,
      house: {
        id: 7,
        zipCode: 90210,
        yearBuilt: 1960,
        squareFootage: 1000,
        bedrooms: 10,
        bathrooms: 5.5,
        value: 100500
      }
    },
    {
      id: 2,
      name: "Second Saved",
      interestLevel: 3,
      house: {
        id: 8,
        zipCode: 10024,
        yearBuilt: 1975,
        squareFootage: 2500,
        bedrooms: 1,
        bathrooms: 0.5,
        value: 100500
      }
    },
    {
      id: 3,
      name: "Third Saved",
      interestLevel: 1,
      house: {
        id: 9,
        zipCode: 60007,
        yearBuilt: 1920,
        squareFootage: 5200,
        bedrooms: 3,
        bathrooms: 2,
        value: 100500
      }
    }
  ];

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 1, tension: 140, friction: 70 }
  });

  const [savedResults, setSavedResults] = useState(dummyData);

  return (
    <div className="saved">
      {savedResults.map(result => (
        // <Link to={`movies/${movie.id}`}>
        <SavedCard {...props} key={result.id} result={result} fadeIn={fadeIn} />
        // </Link>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("SavedList: mstp: state: decodedToken username: ", state.decodedToken)
  return {
    decodedToken: state.decodedToken
  }
}

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
