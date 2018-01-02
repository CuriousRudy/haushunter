import React from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };
  changeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  changePass = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Input
            onChange={this.changeEmail}
            s={6}
            label="Email"
            name="email"
            value={this.state.email}
            validate
          >
            <Icon>email</Icon>
          </Input>
          <Input
            onChange={this.changePass}
            name="password"
            type="password"
            s={6}
            label="Password"
            value={this.state.password}
            validate
          >
            <Icon>password</Icon>
          </Input>
        </Row>
        <div className="container">
          <Button
            s={5}
            onClick={this.props.logIn({
              email: this.state.email,
              password: this.state.password
            })}
            waves="light"
          >
            Log In
          </Button>
        </div>
      </div>
    );
  }
}
