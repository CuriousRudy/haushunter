import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import UserContainer from './containers/UserContainer';
import LoginForm from './components/LogInForm';

class App extends React.Component {
  state = {
    allUsers: [],
    containerToggle: '',
    loggedIn: false,
    userId: ''
  };
  //loads all users so we can check if we are logging in
  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      .then(allUsers => this.setState({ allUsers }));
  };

  //sets the filter toggle to listings
  viewListings = e => {
    e.preventDefault();
    return this.state.containerToggle === 'appointments' ||
      this.state.containerToggle === ''
      ? this.setState({ containerToggle: 'listings' })
      : null;
  };
  //sets the filter toggle to appointments
  viewAppointments = e => {
    e.preventDefault();
    return this.state.containerToggle === 'listings' ||
      this.state.containerToggle === ''
      ? this.setState({ containerToggle: 'appointments' })
      : null;
  };

  //callback in loginform to set the loggedIn to true, and send the userId down
  logIn = arg => {
    return e => {
      e.preventDefault();
      const user = this.state.allUsers.find(user => {
        return user.email.includes(arg);
      });
      this.setState({ userId: user.id });
      this.setState({ loggedIn: true });
    };
  };

  logOut = () => {
    this.setState({
      loggedIn: false
    });
    this.setState({
      userId: ''
    });
  };

  //built in logic to load the login form first, and hide it after you sign in
  render() {
    return (
      <div className="App">
        <Navbar brand="HausHuntr" right>
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
          {this.state.loggedIn === true ? (
            <NavItem onClick={this.logOut} name="logout">
              Log Out
            </NavItem>
          ) : null}
        </Navbar>
        {this.state.loggedIn === true ? (
          <UserContainer
            loggedIn={this.state.userId}
            containerState={this.state.containerToggle}
          />
        ) : (
          <div className="container">
            <LoginForm logIn={this.logIn} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
