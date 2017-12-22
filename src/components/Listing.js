import React from "react";
import {
  Card,
  CardTitle,
  Collapsible,
  CollapsibleItem
} from "react-materialize";
import NewAppointment from "./NewAppointment";

const Listing = props => {
  const card = (
    <Collapsible defaultActiveKey={0}>
      <CollapsibleItem header="Address" icon="map">
        {props.listing.street_address}
      </CollapsibleItem>
      <CollapsibleItem header="Neighborhood" icon="place">
        {`${props.listing.city}, ${props.listing.state} ${props.listing.zip}`}
      </CollapsibleItem>
      <CollapsibleItem header="Layout" icon="info">
        {`${props.listing.beds} beds / ${props.listing.baths} baths`}
      </CollapsibleItem>
      <CollapsibleItem header="Asking Price" icon="attach_money">
        {`$ ${props.listing.asking_price}.00`}
      </CollapsibleItem>
      <CollapsibleItem header="Make An Appointment" icon="attach_money">
        <NewAppointment listing={props.listing} user={props.user} />
      </CollapsibleItem>
    </Collapsible>
  );
  return (
    <div>
      <Card
<<<<<<< HEAD
        header={<CardTitle reveal image={'../img/house.jpg'} waves="light" />}
        title={props.listing.street_address}
=======
        header={<CardTitle reveal image={"../img/house.jpg"} waves="light" />}
        title="Card Title"
>>>>>>> a3d4456c1896aa7e5b39dfe6faa2cd7745e83768
        reveal={card}
      >
        <p>
          <a href="/">See in Maps</a>
        </p>
      </Card>
    </div>
  );
};

export default Listing;
