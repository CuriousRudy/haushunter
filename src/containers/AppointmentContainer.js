import React from 'react';
import Appointment from '../components/Appointment';

export default class AppointmentContainer extends React.Component {
  state = {
    appointments: []
  };
  //on mount, set state with the appointments props
  componentDidMount = () => {
    this.setState({ appointments: this.props.appointments });
  };
  //we get the appointments
  render() {
    const appointments = this.state.appointments.map(appointment => {
      return <Appointment key={appointment.id} appointment={appointment} />;
    });
    return <div className="col s4">{appointments}</div>;
  }
}
