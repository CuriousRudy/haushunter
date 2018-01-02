import React from 'react';
import api from './services/api';
import { Navbar, NavItem } from 'react-materialize';
import UserContainer from './containers/UserContainer';
import LoginForm from './components/LogInForm';

class App extends React.Component {
  state = {
    allUsers: [],
    containerToggle: '',
    loggedIn: false,
    thisUser: {}
  };

  // componentDidMount = () => {
  //   api.users.getUsers().then(allUsers => this.setState({ allUsers }));
  // };

  //add new component did mount, to check localStorage and see if token is there
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(user => {
        this.setState({ thisUser: user });
      });
    }
  };

  //sets the filter toggle to listings
  // viewListings = e => {
  //   e.preventDefault();
  //   return this.state.containerToggle === 'appointments' ||
  //     this.state.containerToggle === ''
  //     ? this.setState({ containerToggle: 'listings' })
  //     : null;
  // };
  // //sets the filter toggle to appointments
  // viewAppointments = e => {
  //   e.preventDefault();
  //   return this.state.containerToggle === 'listings' ||
  //     this.state.containerToggle === ''
  //     ? this.setState({ containerToggle: 'appointments' })
  //     : null;
  // };

  //callback in loginform to set the loggedIn to true, and send the userId down
  // logIn = arg => {
  //   return e => {
  //     e.preventDefault();
  //     const user = this.state.allUsers.find(user => {
  //       return user.email === arg;
  //     });
  //     this.setState({ thisUser: user, loggedIn: true });
  //   };
  // };

  login = (email, pass) => {
    return e => {
      e.preventDefault();
      api.auth.logIn(email, pass).then(user => {
        console.log(user);
        localStorage.setItem('token', user.token);
        this.setState({ thisUser: user });
      });
    };
  };

  logOut = () => {
    this.setState({
      loggedIn: false
    });
    this.setState({
      thisUser: {}
    });
    //delete the token from localStorage
  };

  //built in logic to load the login form first, and hide it after you sign in
  render() {
    console.log(this.state);
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
            thisUser={this.state.thisUser}
            containerState={this.state.containerToggle}
          />
        ) : (
          <div className="container">
            <LoginForm logIn={this.login} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
