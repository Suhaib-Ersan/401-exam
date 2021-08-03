import React, { Component } from "react";
import { withAuth0, Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import { Card, Button } from "react-bootstrap";

import AllColorsCard from "./components/AllColorsCard";
import userEvent from "@testing-library/user-event";

class AllDataAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorData: [
        {
          title: "test",
          image: "test",
        },
      ],
      showModal: false,
    };
    
  }
  

  async componentDidMount() {
    let axiosData = await axios.get(`${process.env.REACT_APP_SERVER}/allcolors`);
    let allColorsData = axiosData.data;

    // console.log({ allColorsData });

    await this.setState({
      colorData: allColorsData,
    });
    // console.log(this.state.colorData);
    // console.log(this.state.colorData);
  }
  async addToFavorites(event) {
    event.preventDefault();
    const { user } = this.props.auth0;
    console.log("event.target: ", event.target);

    let axiosThing = await axios.post(`${process.env.REACT_APP_SERVER}/addcolor?title=${event.target.title.value}&image=${event.target.image.value}&email=${user.email}`);
    this.setState({
      colorData: axiosThing,
    });
  }

  render() {
    const { user } = this.props.auth0;
    return (
      <>
        <div>
          <h1>All Data from the API</h1>
          <h3>Select your favorites :)</h3>
        </div>
        <div>
          <AllColorsCard addToFavorites={this.addToFavorites} colorData={this.state.colorData} />
        </div>
      </>
    );
  }
}

export default withAuth0(AllDataAPI);
