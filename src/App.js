import React from 'react';
import api from './services/api';
import { Button, Row, Col, Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import LoginForm from './components/LogInForm';
import SignUpForm from './components/SignUpForm';

class App extends React.Component {
  state = {
    thisUser: {}
  };

  //add new component did mount, to check localStorage and see if token is there
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(user => {
        this.setState({ thisUser: user });
      });
    }
  };

  login = (email, pass) => {
    return e => {
      e.preventDefault();
      api.auth.logIn(email, pass).then(user => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!', user);
        localStorage.setItem('token', user.token);
        this.setState({ thisUser: user });
      });
    };
  };

  logOut = () => {
    localStorage.removeItem('token');
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

    fetch('http://localhost:3000/api/v1/users', options)
      .then(res => res.json())
      .then(this.forceUpdate());
  };

  //built in logic to load the login form first, and hide it after you sign in
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        {this.state.thisUser.id ? (
          <div className="LoggedIn">
            <Navbar brand="HausHuntr" right>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/appointments">Appointments</Link>
                </li>
                <li>
                  <Link to="/listings">Listings</Link>
                </li>
              </ul>
              <Button onClick={this.logOut} name="logout" right="true">
                Log Out
              </Button>
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
                  <LoginForm logIn={this.login} />
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
