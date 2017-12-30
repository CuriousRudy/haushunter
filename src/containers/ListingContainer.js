import React from "react";
import Listing from "../components/Listing";
import { Tab, Tabs } from "react-materialize";
import NewListing from "../components/NewListing";
import api from "../services/api";

export default class ListingContainer extends React.Component {
  state = {
    listings: []
  };
  //on mount, set state with the listings props
  componentDidMount = () => {
    api.listings.getListings().then(listings => this.setState({ listings }));
    this.newListingId();
  };

  newListingId = () => {
    this.state.listings.length + 1;
  };

  createNewListing = listing => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify({ listing: listing })
    };

    fetch("http://localhost:3000/api/v1/listings", options)
      .then(res => res.json())
      .then(console.log)
      .then(listing => {
        this.setState(prevState => {
          return {
            listings: [...prevState.listings, listing]
          };
        });
      });
  };

  createNewAppointment = appointment => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify({ appointment: appointment })
    };

    fetch("http://localhost:3000/api/v1/appointments", options)
      .then(res => res.json())
      .then(console.log)
      .then(appointment => {
        this.setState(prevState => {
          return {
            appointments: [...prevState.appointments, appointment]
          };
        });
      });
  };

  //we get the listings
  render() {
    console.log(this.props);
    const listings = this.state.listings.map(listing => {
      return (
        <Listing
          key={listing.id}
          userId={this.props.userId}
          listing={listing}
          createNewAppointment={this.createNewAppointment}
          newAppointmentId={this.newAppointmentId}
        />
      );
    });
    return (
      <div className="container">
        <br />
        <Tabs className="tab-demo z-depth-0">
          <Tab title="All Listings" active="true">
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
