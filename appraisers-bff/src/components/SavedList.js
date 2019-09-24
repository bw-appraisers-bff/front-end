import React from "react";
import Saved from "./Saved.js";

class SavedList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            something: ''
        }
    } //maybe I don't need this with mapToProps

  render() {
    return (
      <div className="container saved-list">
        <h1>Your saved searches</h1>
        {/* {this.props.something.map(card => {
            <Saved
                key={card.id}
                id={card.id}
                imgUrl={card.img_url}
                name={card.name}
                interest={card.interest}
                history={card.history}
            />
            //something like that.
        })} */}
      </div>
    );
  }
}

export default SavedList;
