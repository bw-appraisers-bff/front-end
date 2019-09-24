import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

const Saved = () => {
  return (
    <div className="container saved">
      <div className="saved-list-card">
        <Card
          image="/images/heart.png" //if we want an img
          header="Elliot Baker" // title/name of search
          meta="Friend" //could be level of interest
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat." //rerender props of the search
          extra={extra} //edit delete buttons?
        />
      </div>
    </div>
  );
};

export default Saved;
