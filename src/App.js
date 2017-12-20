import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import UserContainer from './containers/UserContainer';

class App extends Component {
  state = {
    allUsers: [],
    containerToggle: ''
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      .then(allUsers => this.setState({ allUsers }));
  }

  viewListings = e => {
    e.preventDefault();
    return this.state.containerToggle === 'appointments' ||
      this.state.containerToggle === ''
      ? this.setState({ containerToggle: 'listings' })
      : null;
  };
  viewAppointments = e => {
    e.preventDefault();
    return this.state.containerToggle === 'listings' ||
      this.state.containerToggle === ''
      ? this.setState({ containerToggle: 'appointments' })
      : null;
  };

  render() {
    return (
      <div className="App">
        <Navbar brand="HausHuntr" left>
          <NavItem
            onClick={this.viewAppointments}
            name="appointments"
            href="/appointments"
          >
            Appointments
          </NavItem>
          <NavItem onClick={this.viewListings} name="listings" href="/listings">
            Listings
          </NavItem>
        </Navbar>
        <UserContainer
          users={this.state.allUsers}
          containerState={this.state.containerToggle}
        />
      </div>
    );
  }
}

export default App;
