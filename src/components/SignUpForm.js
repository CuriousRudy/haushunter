import React from "react";
import { Row, Input, Icon, Button } from "react-materialize";

export default class SignUpForm extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="signUp">
          <h3>Sign Up:</h3>
          <Row>
            <Input
              onChange={this.handleChange}
              s={6}
              label="Email"
              value={this.state.email}
              validate
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
            >
              <Icon>enhanced_encryption</Icon>
            </Input>
          </Row>
          <div className="container">
            <Button
              s={5}
              // onClick={this.props.createNewUser(this.state)}
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
