import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={15}
      center={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
      />
    </GoogleMap>
  );
});

export default Map;
