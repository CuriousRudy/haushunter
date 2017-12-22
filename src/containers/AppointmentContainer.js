import React from 'react';
import Appointment from '../components/Appointment';
import api from '../services/api';

export default class AppointmentContainer extends React.Component {
  state = {
    appointments: []
  };
  //on mount, set state with the appointments props
  componentDidMount = () => {
    api.appointments
      .getAppointments(this.props.userId)
      .then(appointments => this.setState({ appointments }));
  };
  //we get the appointments
  render() {
    // console.log(this.state.appointments);
    // console.log(this.props.appointments[0].notes);
    const appointments = this.state.appointments.map(appointment => {
      return (
        <Appointment
          notes={appointment.notes}
          key={appointment.id}
          appointment={appointment}
        />
      );
    });
    return (
      <div className="container">
        <div className="row">{appointments}</div>
      </div>
    );
  }
}
