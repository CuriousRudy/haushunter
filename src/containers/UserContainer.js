import React from 'react';
import AppointmentContainer from './AppointmentContainer';
import ListingContainer from './ListingContainer';
import { Switch, Route } from 'react-router-dom';
import { Col, Row, ProgressBar } from 'react-materialize';

export default class UserContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: {},
      containerState: '',
      loading: true
    };
  }
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        userId: this.props.thisUser.id
      });
    }
  };

  //pass our resource directly down to the AppointmentContainer
  render() {
    console.log('user container', this.props.thisUser);
    return (
      <div className="container">
        {this.props.thisUser.id ? (
          <Switch>
            <Route
              path="/appointments"
              render={() => {
                return <AppointmentContainer userId={this.state.userId} />;
              }}
            />
            <Route
              path="/listings"
              render={() => {
                return <ListingContainer userId={this.state.userId} />;
              }}
            />
          </Switch>
        ) : (
          <Row>
            <Col s={12}>
              <ProgressBar />
            </Col>
          </Row>
        )}
      </div>
    );
  }
}
