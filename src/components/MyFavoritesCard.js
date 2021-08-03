import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

import { Card, Button } from "react-bootstrap";
import "./MyFavoritesCard.css";

class AllDataAPI extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="allColorsDiv">
          {this.props.colorData.map((ele) => {
            return (
              <Card style={{ width: "18rem" }}>
                <form onSubmit={this.props.addToFavorites} >
                  <Card.Img name="image" variant="top" src={ele.image} />
                  <Card.Body>
                    <Card.Title name="title">{ele.title}</Card.Title>
                    <Button type="submit"  variant="primary">Add to favorites</Button>
                  </Card.Body>
                </form>
              </Card>
            );
          })}
        </div>
      </>
    );
  }
}

export default withAuth0(AllDataAPI);
