import React from "react";
import { Row, Input, Button } from "react-materialize";

class NewAppointment extends React.Component {
  state = {
    date: "",
    time: "",
    user_id: "",
    listing_id: ""
  };

  // createAppointment = appointment => {
  //   const options = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     method: "POST",
  //     body: JSON.stringify({ appointment: appointment })
  //   };
  //
  //   fetch("http://localhost:3000/api/v1/appointments", options)
  //     .then(res => res.json())
  //     .then(console.log)
  //     .then(appointment => {
  //       this.setState(prevState => {
  //         return {
  //           appointments: [...prevState.appointments, appointment]
  //         };
  //       });
  //     });
  // };
  componentDidMount() {
    this.setState({
      user_id: this.props.user.id,
      listing_id: this.props.listing.id
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    debugger;
    // this.props.createAppointment(this.state);
  };

  render() {
    return (
      <div className="input-field">
        <Row>
          <Input name="date" type="date" onChange={this.handleChange} />
        </Row>
        <Row>
          //Not rendering as expected
          <input name="timepicker" type="time" onChange={this.handleChange} />
        </Row>
        <Button onClick={this.handleSubmit} waves="light">
          Make Appointment
        </Button>
      </div>
    );
  }
}

export default NewAppointment;
