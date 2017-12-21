import React from 'react';
import {
  Card,
  CardTitle,
  Collapsible,
  CollapsibleItem
} from 'react-materialize';

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
    </Collapsible>
  );
  return (
    <div>
      <Card
        header={<CardTitle reveal image={'../img/house.jpg'} waves="light" />}
        title="Card Title"
        reveal={card}
      >
        <p>
          <a href="#">This is a link</a>
        </p>
      </Card>
    </div>
  );
};

export default Listing;
