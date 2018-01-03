import React from "react";
import Appointment from "../components/Appointment";
import api from "../services/api";

export default class AppointmentContainer extends React.Component {
  state = {
    appointments: []
  };
  //on mount, set state with the appointments props
  componentDidMount = () => {
    api.appointments
      .getAppointments(this.props.thisUser.id)
      .then(appointments => this.setState({ appointments }));
  };

  deleteAppointment = appointment => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "DELETE",
      body: JSON.stringify({ appointment: appointment })
    };

    fetch("http://localhost:3000/api/v1/appointments/", options)
      .then(res => res.json())
      .then(this.forceUpdate());
  };
  //we get the appointments
  render() {
    console.log("appointmentscontroller", this.state);
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
        <div className="row">{appointments}</div>
      </div>
    );
  }
}
