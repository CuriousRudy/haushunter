import React from 'react';
import Appointment from '../components/Appointment';

export default class AppointmentContainer extends React.Component {
  state = {
    appointments: []
  };
  //send delete request to the api, and reset the state when we get the new list of appointments
  componentWillReceiveProps = nextProps => {
    if (nextProps.appointments.length !== this.state.appointments.length) {
      this.setState({ appointments: nextProps.appointments });
    }
  };
  //we get the appointments
  render() {
    // console.log('Im Rendering', this.state.appointments)
    const appointments = this.props.appointments.map(appointment => {
      return (
        <Appointment
          notes={appointment.notes}
          key={appointment.id}
          appointment={appointment}
          deleteAppointment={this.props.deleteAppointment}
        />
      );
    });
    return (
      <div className="container">
        <div className="row">
          {this.props.appointments.length <= 0 ? (
            <h3>You have no Appointments scheduled </h3>
          ) : (
            appointments
          )}
        </div>
      </div>
    );
  }
}
