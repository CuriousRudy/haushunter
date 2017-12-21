import React from 'react';
import AppointmentContainer from './AppointmentContainer';
import ListingContainer from './ListingContainer';

export default class UserContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      thisUser: {},
      containerState: ''
    };
  }

  //after login, fetches the data for our loggedIn user
  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/users/' + this.props.loggedIn)
      .then(res => res.json())
      .then(thisUser => this.setState({ thisUser }));
  };

  //updates the toggle status for the filter
  componentWillReceiveProps = nextProps => {
    this.setState({ containerState: nextProps.containerState });
  };

  //pass our resource directly down to the AppointmentContainer
  render() {
    // console.log('user state', this.state);
    return (
      <div className="row">
        {this.state.containerState === 'appointments' ? (
          <AppointmentContainer
            appointments={this.state.thisUser.appointments}
          />
        ) : (
          <ListingContainer listings={this.state.thisUser.listings} />
        )}
      </div>
    );
  }
}
