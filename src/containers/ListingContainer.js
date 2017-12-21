import React from 'react';
import Listing from '../components/Listing';
import { Button, Icon } from 'react-materialize';

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
        <div className="col s12">
          <div className="container">
            <div className="col s10">
              <Button waves="light">
                Add Listing<Icon right>edit</Icon>
              </Button>
              {listings}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
