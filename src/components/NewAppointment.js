import React from 'react';
import { Row, Input, Button } from 'react-materialize';

class NewAppointment extends React.Component {
  state = {
    date: '',
    time: '',
    user_id: '',
    listing_id: ''
  };

  componentDidMount() {
    this.setState({
      user_id: this.props.userId,
      listing_id: this.props.listingId
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createNewAppointment(this.state);
  };

  render() {
    // console.log(this.state)
    return (
      <div className="input-field">
        <Row>
          <Input name="date" type="date" onChange={this.handleChange} />
        </Row>
        <Row>
          {/* //Not rendering as expected */}
          <input name="time" type="time" onChange={this.handleChange} />
        </Row>
        <Button onClick={this.handleSubmit} waves="light">
          Make Appointment
        </Button>
      </div>
    );
  }
}

export default NewAppointment;
