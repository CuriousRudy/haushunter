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
    const listings = this.state.listings.map(listing => {
      return <Listing key={listing.id} listing={listing} />;
    });
    return <div className="col s4">{listings}</div>;
  }
}
