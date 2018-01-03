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

  deleteAppointment = appointmentId => {
    const token = localStorage.getItem('token');
    const options = {
      method: 'DELETE',
      headers: {
<<<<<<< HEAD
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "DELETE",
      body: JSON.stringify({ appointment: appointment })
    };

    fetch("http://localhost:3000/api/v1/appointments", options)
=======
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token
      }
    };
    return fetch(
      `http://localhost:3000/api/v1/appointments/${appointmentId}`,
      options
    )
>>>>>>> d21a567baa5ece4c5508cd4a7e0c8936470adf8c
      .then(res => res.json())
      .then(appointments => this.setState({ appointments: [...appointments] }));
  };

  //we get the appointments
  render() {
<<<<<<< HEAD
    console.log("DUUUUUUUUUDE", this.state.appointments);
=======
    console.log('Im Rendering', this.state.appointments);
>>>>>>> d21a567baa5ece4c5508cd4a7e0c8936470adf8c
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
