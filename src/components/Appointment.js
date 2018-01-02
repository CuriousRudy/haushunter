import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import NoteContainer from "../containers/NoteContainer";

onClick = e => {
  e.preventDefault();
  this.props.deleteAppointment(this.props.appointment);
};

const Appointment = props => {
  return (
    <div className="col s12 m6">
      <Collapsible defaultActiveKey={0}>
        <CollapsibleItem header="Date" icon="date_range">
          {props.appointment.date}
        </CollapsibleItem>
        <CollapsibleItem header="Time" icon="access_time">
          {props.appointment.time}
        </CollapsibleItem>
        <CollapsibleItem header="Notes" icon="info">
          <NoteContainer notes={props.appointment.notes} />
        </CollapsibleItem>
      </Collapsible>
      <p>
        <Button onClick={this.handleClick} />
      </p>
    </div>
  );
};

export default Appointment;
