import React from 'react';
import Listing from '../components/Listing';
import { Tab, Tabs } from 'react-materialize';
import NewListing from '../components/NewListing';
import api from '../services/api';

export default class ListingContainer extends React.Component {
  state = {
    listings: []
  };

  //fetch all the listings when this component mounts- WORKS
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      api.listings.getListings().then(listings => this.setState({ listings }));
    }
  };

  //create a new listing form-WORKS
  createNewListing = listing => {
    api.listings
      .createNewListing(listing)
      .then(listing =>
        this.setState({ listings: [...this.state.listings, listing] })
      );
  };

  //delete a listing from the page
  deleteListing = listingId => {
    api.listings
      .deleteListing(listingId)
      .then(listings => this.setState({ listings }));
  };

  //we get the listings
  render() {
    console.log('listing container props', this.props);
    const listings = this.state.listings.map(listing => {
      return (
        <Listing
          key={listing.id}
          userId={this.props.userId}
          listing={listing}
          createNewAppointment={this.props.createNewAppointment}
          deleteListing={this.deleteListing}
        />
      );
    });
    return (
      <div className="container">
        <br />
        <Tabs className="tab-demo z-depth-0">
          <Tab title="All Listings" active>
            {listings}
          </Tab>
          <Tab title="Add a Listing">
            <NewListing
              createNewListing={this.createNewListing}
              newListingId={this.newListingId}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
