import React from 'react';
import AppointmentContainer from './AppointmentContainer';
import ListingContainer from './ListingContainer';
import { Switch, Route } from 'react-router-dom';
import { Col, Row, ProgressBar } from 'react-materialize';
import api from '../services/api';

export default class UserContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: {},
      containerState: '',
      loading: true,
      appointments: []
    };
  }
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        userId: this.props.thisUser.id
      });
      api.appointments
        .getAppointments(this.state.userId)
        .then(appointments => this.setState({ appointments }));
    }
  };

  createNewAppointment = appointment => {
    api.appointments
      .createNewAppointment(appointment)
      .then(appt =>
        this.setState({ appointments: [...this.state.appointments, appt] })
      );
  };

  deleteAppointment = appointmentId => {
    api.appointments
      .deleteAppointment(appointmentId)
      .then(appointments => this.setState({ appointments: [...appointments] }));
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
                return (
                  <AppointmentContainer
                    deleteAppointment={this.deleteAppointment}
                    appointments={this.state.appointments}
                    userId={this.state.userId}
                  />
                );
              }}
            />
            <Route
              path="/listings"
              render={() => {
                return (
                  <ListingContainer
                    createNewAppointment={this.createNewAppointment}
                    userId={this.state.userId}
                  />
                );
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
