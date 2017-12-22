import React from 'react';
import { Row, Input } from 'react-materialize';

class NewListing extends React.Component {
  state = {
    street_address: '',
    city: '',
    state: '',
    zip: '',
    beds: '',
    baths: '',
    asking_price: ''
  };

  updateState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //a simple materialize form to add a listing, hidden in a little tab
  render() {
    console.log(this.state);
    return (
      <Row>
        <Input
          name="street_address"
          onChange={this.updateState}
          value={this.state.street_address}
          placeholder="Street Address"
          s={12}
          label="Street Address"
        />
        <Input
          name="city"
          onChange={this.updateState}
          value={this.state.city}
          s={6}
          label="City"
          placeholder="i.e. Brooklyn"
        />
        <Input
          name="state"
          onChange={this.updateState}
          value={this.state.state}
          type="text"
          label="State"
          s={3}
        />
        <Input
          name="zip"
          onChange={this.updateState}
          value={this.state.zip}
          type="text"
          label="Zip"
          s={3}
        />
        <Input
          name="beds"
          onChange={this.updateState}
          value={this.state.beds}
          type="number"
          label="Beds"
          s={2}
        />
        <Input
          name="baths"
          onChange={this.updateState}
          value={this.state.baths}
          type="number"
          label="Baths"
          s={2}
        />
        <Input
          name="asking_price"
          onChange={this.updateState}
          value={this.state.asking_price}
          type="number"
          label="Asking Price"
          s={5}
        />
      </Row>
    );
  }
}

export default NewListing;
