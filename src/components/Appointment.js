import React from 'react';
import { Collapsible, CollapsibleItem, Button } from 'react-materialize';
import NoteContainer from '../containers/NoteContainer';

class Appointment extends React.Component {
  deleteAppointment = id => {
    return e => {
      e.preventDefault();
      this.props.deleteAppointment(id);
    };
  };

  render() {
    const target = this.props.appointment.id;
    return (
      <div className="col s12 m6">
        <Collapsible defaultActiveKey={0}>
          <CollapsibleItem header="Date" icon="date_range">
            {this.props.appointment.date}
          </CollapsibleItem>
          <CollapsibleItem header="Time" icon="access_time">
            {this.props.appointment.time}
          </CollapsibleItem>
          <CollapsibleItem header="Notes" icon="info">
            <NoteContainer notes={this.props.appointment.notes} />
          </CollapsibleItem>
          <CollapsibleItem header="Delete Appointment">
            <div>
              <Button onClick={this.deleteAppointment(target)}>
                Delete Appointment
              </Button>
            </div>
          </CollapsibleItem>
        </Collapsible>
        <p />
      </div>
    );
  }
}

export default Appointment;
