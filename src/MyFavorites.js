import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavorites extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favColorData: [
        {
          title: "test",
          image: "test",
        },
      ],
    }
  }
  componentDidMount() {
    let axiosData = axios.get(`${process.env.REACT_APP_SERVER}/favcolors`);
    let allColorsData = axiosData.data;

    // console.log({ allColorsData });

    await this.setState({
      favColorData: allColorsData,
    });
  }
  render() {
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <MyFavoritesCard />
      </>
    )
  }
}

export default withAuth0(MyFavorites);

