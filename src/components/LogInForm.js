import React from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="signIn">
          <h3>Sign In:</h3>
          <Row>
            <Input
              onChange={this.handleChange}
              s={6}
              label="Email"
              value={this.state.email}
              validate
              name="email"
              type="email"
            >
              <Icon>email</Icon>
            </Input>
          </Row>
          <Row>
            <Input
              onChange={this.handleChange}
              s={6}
              label="Password"
              value={this.state.password}
              validate
              type="password"
              name="password"
            >
              <Icon>enhanced_encryption</Icon>
            </Input>
          </Row>
          <div className="container">
            <Button
              s={5}
              onClick={this.props.logIn(this.state.email, this.state.password)}
              waves="light"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
