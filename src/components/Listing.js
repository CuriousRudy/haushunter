import React from 'react';
import {
  Card,
  CardTitle,
  Collapsible,
  CollapsibleItem,
  Button
} from 'react-materialize';
import NewAppointment from './NewAppointment';

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
      <CollapsibleItem header="Add Appointment" icon="pencil">
        <NewAppointment
          userId={props.userId}
          createNewAppointment={props.createNewAppointment}
          listingId={props.listing.id}
        />
      </CollapsibleItem>
    </Collapsible>
  );
  return (
    <div className="col s4">
      <Card
        header={
          <CardTitle
            reveal
            image={`../img/house${Math.floor(Math.random() * 14)}.jpg`}
            waves="light"
          />
        }
        title={props.listing.street_address}
        reveal={card}
      >
        <p>
          <Button onClick={() => props.deleteListing(props.listing.id)}>
            Delete Listing
          </Button>
        </p>
      </Card>
    </div>
  );
};

export default Listing;
