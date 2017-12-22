import React from 'react';
import AppointmentContainer from './AppointmentContainer';
import ListingContainer from './ListingContainer';
import { Col, ProgressBar, Row } from 'react-materialize';

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
      .then(
        thisUser => this.setState({ thisUser }),
        this.setState({ containerState: this.props.containerState })
      );
  };

  //updates the toggle status for the filter
  componentWillReceiveProps = nextProps => {
    this.setState({ containerState: nextProps.containerState });
  };

  //pass our resource directly down to the AppointmentContainer
  render() {
    console.log(this.state);
    const containerSwitch =
      this.state.containerState === '' ||
      this.state.containerState === 'appointments' ? (
        <AppointmentContainer appointments={this.state.thisUser.appointments} />
      ) : (
        <ListingContainer listings={this.state.thisUser.listings} />
      );

    //need to add another const switch to check if state = form
    //if state === form, show nothing but the new form.
    //on submit, clear containerState and render our loading until we
    //change containerState again.
    return (
      <div className="row">
        {this.state.containerState === '' ? (
          <Row>
            <Col s={12}>
              <ProgressBar />
            </Col>
          </Row>
        ) : (
          containerSwitch
        )}
      </div>
    );
  }
}
