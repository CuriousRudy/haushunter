import React from 'react';
import Listing from '../components/Listing';

export default class ListingContainer extends React.Component {
  state = {
    listings: []
  };
  //on mount, set state with the listings props
  componentDidMount = () => {
    this.setState({ listings: this.props.listings });
  };
  //we get the listings
  render() {
    console.log(this.state.listings);
    return <div>{'hey'}</div>;
  }
}
