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
    console.log(this.state.appointments);
    return (
      <div>
        <Appointment />
      </div>
    );
  }
}
