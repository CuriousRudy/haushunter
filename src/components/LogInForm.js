import React from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';

export default class LoginForm extends React.Component {
  state = {
    email: ''
  };
  handleChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Input
            onChange={this.handleChange}
            s={4}
            label="Email"
            value={this.state.email}
            validate
          >
            <Icon>email</Icon>
          </Input>
        </Row>
        <div className="container">
          <div>
            <Button onClick={this.props.logIn(this.state.email)} waves="light">
              button
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
