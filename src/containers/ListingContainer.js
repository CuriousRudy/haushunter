import React from 'react';
import Listing from '../components/Listing';
import { Tab, Tabs } from 'react-materialize';
import NewListing from '../components/NewListing';

export default class ListingContainer extends React.Component {
  state = {
    listings: [],
    submitNew: ''
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
    return (
      <div className="container">
        <br />
        <Tabs className="tab-demo z-depth-0">
          <Tab title="All Listings" active>
            {listings}
          </Tab>
          <Tab title="Add a Listing">
            <NewListing />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
