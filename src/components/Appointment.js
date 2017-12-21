import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

const Appointment = props => {
  return (
    <div>
      <Collapsible defaultActiveKey={0}>
        <CollapsibleItem header="Date" icon="date_range">
          {props.appointment.date}
        </CollapsibleItem>
        <CollapsibleItem header="Time" icon="access_time">
          {props.appointment.time}
        </CollapsibleItem>
        <CollapsibleItem header="Listing" icon="info">
          "This needs something"
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
};

export default Appointment;
