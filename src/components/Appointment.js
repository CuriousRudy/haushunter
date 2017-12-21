import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";

const Appointment = props => {
  return (
    <Collapsible popout defaultActiveKey={0}>
      <CollapsibleItem header="Email" icon="filter_drama">
        Appointment Time {props.date}
      </CollapsibleItem>
      <CollapsibleItem header="Second" icon="place">
        Appointment Time {props.time}
      </CollapsibleItem>
      <CollapsibleItem header="Third" icon="whatshot">
        Lorem ipsum dolor sit amet.
      </CollapsibleItem>
    </Collapsible>
  );
};

export default Appointment;
