import React from "react";
import {
  Card,
  CardTitle,
  Collapsible,
  CollapsibleItem,
  Button
} from "react-materialize";
import NewAppointment from "./NewAppointment";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  isMarkerShown
} from "react-google-maps";
import { compose, withProps } from "recompose";
import Map from "./Map";

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
      <CollapsibleItem header="Add Appointment" icon="create">
        <NewAppointment
          userId={props.userId}
          createNewAppointment={props.createNewAppointment}
          listingId={props.listing.id}
        />
      </CollapsibleItem>
      <CollapsibleItem header="View in Map" icon="add_location">
        <Map
          props={props.listing}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </CollapsibleItem>
    </Collapsible>
  );

  return (
    <div>
      <Card
        header={<CardTitle reveal image={"../img/house.jpg"} waves="light" />}
        title={props.listing.street_address}
        reveal={card}
      >
        <p>
          <Button onClick={props.deleteListing}>Delete Listing</Button>
        </p>
      </Card>
    </div>
  );
};

export default Listing;
