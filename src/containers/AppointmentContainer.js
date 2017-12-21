import React from 'react';
import Appointment from '../components/Appointment';

export default class AppointmentContainer extends React.Component {
  state = {
    appointments: [],
    notes: []
  };
  //on mount, set state with the appointments props
  componentDidMount = () => {
    this.setState({ appointments: this.props.appointments });
  };
  //we get the appointments
  render() {
    console.log(this.props.appointments[0].notes);
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
