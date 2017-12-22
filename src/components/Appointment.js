import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import NoteContainer from "../containers/NoteContainer";
// import AddToCalendar from "react-add-to-calendar";
// state = {
// event: {
//   title: 'Sample Event',
//   description: 'This is the sample event provided as an example only',
//   location: 'Portland, OR',
//   startTime: '2016-09-16T20:15:00-04:00',
//   endTime: '2016-09-16T21:45:00-04:00'
// }
// };
// <AddToCalendar event={this.state.event}/>
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
    </div>
  );
};

export default Appointment;
