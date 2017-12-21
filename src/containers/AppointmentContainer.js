import React from 'react';
import Appointment from '../components/Appointment';
import { Collapsible, CollapsibleItem } from 'react-materialize';

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
      return (
        <div>
          <Collapsible popout defaultActiveKey={null}>
            <CollapsibleItem header="Date" icon="filter_drama">
              {appointment.date}
            </CollapsibleItem>
            <CollapsibleItem header="Time" icon="place">
              {appointment.time}
            </CollapsibleItem>
            <CollapsibleItem header="Listing" icon="whatshot">
              "This needs something"
            </CollapsibleItem>
          </Collapsible>
        </div>
      );
    });
    console.log(this.state.appointments);
    return <div className="col s4">{appointments}</div>;
  }
}
