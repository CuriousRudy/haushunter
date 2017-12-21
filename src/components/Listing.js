import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

const Listing = props => {
  return (
    <div>
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
      </Collapsible>
    </div>
  );
};

export default Listing;
