import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyFavorites.css";
import { withAuth0 } from "@auth0/auth0-react";

import axios from "axios";
import MyFavoritesCard from "./components/MyFavoritesCard";
import { Modal } from "react-bootstrap";

class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favColorData: [
        {
          title: "test",
          image: "test",
        },
      ],
    };
  }
  async componentDidMount() {
    let axiosData = axios.get(`${process.env.REACT_APP_SERVER}/favcolors`);
    let allColorsData = axiosData.data;

    // console.log({ allColorsData });

    await this.setState({
      favColorData: allColorsData,
    });
  }
  async deleteColor() {}
  async updateColor() {}
  handleClose() {
    this.setState ({
      
    })
  }
  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>This is a collection of my favorites</p>
        <MyFavoritesCard colorData={this.state.favColorData} deleteColor={this.deleteColor} updateColor={this.updateColor} />
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(MyFavorites);
