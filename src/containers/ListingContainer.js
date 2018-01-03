import React from 'react';
import Listing from '../components/Listing';
import { Tab, Tabs } from 'react-materialize';
import NewListing from '../components/NewListing';
import api from '../services/api';

export default class ListingContainer extends React.Component {
  state = {
    listings: []
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      api.listings.getListings().then(listings => this.setState({ listings }));
    }
  };

  createNewListing = listing => {
    api.listings
      .createNewListing(listing)
      .then(listing =>
        this.setState({ listings: [...this.state.listings, listing] })
      );
  };

  createNewAppointment = appointment => {
    api.appointments.createNewAppointment(appointment).then(this.forceUpdate());
  };

  deleteListing = listing => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      method: 'DELETE',
      body: JSON.stringify({ listing: listing })
    };

    fetch('http://localhost:3000/api/v1/listings', options)
      .then(res => res.json())
      .then(this.forceUpdate());
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
          createNewAppointment={this.createNewAppointment}
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
