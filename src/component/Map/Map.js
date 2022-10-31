import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "50vh",
};

const center = {
  lat: 23.894738423805016,
  lng: 89.65096345461863,
};
const onLoad = (marker) => {
  console.log("marker: ", marker);
};
const Map = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker onLoad={onLoad} position={center} />
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
