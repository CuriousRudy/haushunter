import React from 'react';
import api from './services/api';
import { Row, Col, Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import LoginForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm';

class App extends React.Component {
  state = {
    allUsers: [],
    // containerToggle: "",
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

  createNewUser = users => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ users: users })
    };

    fetch('http://localhost:3000/api/v1/userss', options)
      .then(res => res.json())
      .then(this.forceUpdate());
  };

  //built in logic to load the login form first, and hide it after you sign in
  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.loggedIn === true ? (
          <div className="LoggedIn">
            <Navbar brand="HausHuntr" right>
              <NavItem onClick={this.logOut} name="logout">
                Log Out
              </NavItem>
              <ul class="right hide-on-med-and-down">
                <li>
                  <Link to="/appointments">Appointments</Link>
                </li>
                <li>
                  <Link to="/listings">Listings</Link>
                </li>
              </ul>
            </Navbar>
            <UserContainer thisUser={this.state.thisUser} />
          </div>
        ) : (
          <div className="LoggedOut">
            <Navbar brand="HausHuntr" right />
            <div className="container">
              <Row>
                <Col s={6}>
                  <SignUpForm createNewUser={this.createNewUser} />
                </Col>
                <Col s={6}>
                  <LoginForm logIn={this.logIn} />
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
