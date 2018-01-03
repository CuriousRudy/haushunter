import React from 'react';
import Appointment from '../components/Appointment';
import api from '../services/api';

export default class AppointmentContainer extends React.Component {
  state = {
    appointments: []
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('hey');
      api.appointments
        .getAppointments(this.props.userId)
        .then(appointments => this.setState({ appointments }));
    }
  };
  //send delete request to the api, and reset the state when we get the new list of appointments
  deleteAppointment = appointmentId => {
    api.appointments
      .deleteAppointment(appointmentId)
      .then(appointments => this.setState({ appointments: [...appointments] }));
  };

  //we get the appointments
  render() {
    // console.log('Im Rendering', this.state.appointments)
    const appointments = this.state.appointments.map(appointment => {
      return (
        <Appointment
          notes={appointment.notes}
          key={appointment.id}
          appointment={appointment}
          deleteAppointment={this.deleteAppointment}
        />
      );
    });
    return (
      <div className="container">
        <div className="row">
          {appointments.length <= 0 ? (
            <h3>You have no Appointments scheduled </h3>
          ) : (
            appointments
          )}
        </div>
      </div>
    );
  }
}
