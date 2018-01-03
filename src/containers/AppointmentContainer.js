import React from "react";
import Appointment from "../components/Appointment";
import api from "../services/api";

export default class AppointmentContainer extends React.Component {
  state = {
    appointments: []
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("hey");
      api.appointments
        .getAppointments(this.props.userId)
        .then(appointments => this.setState({ appointments }));
    }
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

    fetch("http://localhost:3000/api/v1/appointments", options)
      .then(res => res.json())
      .then(this.forceUpdate());
  };
  //we get the appointments
  render() {
    console.log("DUUUUUUUUUDE", this.state.appointments);
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
