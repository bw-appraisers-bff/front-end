import React from "react";
import { Card, Icon } from "semantic-ui-react";

import '../assets/saved.scss';

const Saved = (props) => {
  return (
    <div className="container saved">
      <div className="saved-list-card">
        {/* <Card
          image={imgUrl} //if we want an img
          header={name} // title/name of search
          meta={interest} //could be level of interest
          description={history} //rerender props of the search
          extra={extra} //edit delete buttons?
        /> */}
      </div>
    </div>
  );
};

export default Saved;
