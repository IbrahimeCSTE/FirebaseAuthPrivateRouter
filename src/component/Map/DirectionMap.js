import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const DirectionMap = ({ origin, destination }) => {
  const [response, setResponse] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");

  const directionsCallback = (res) => {
    console.log(response);

    if (res !== null) {
      if (res.status === "OK") {
        setResponse(res);
      } else {
        console.log("response: ", response);
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        // required
        id="direction-example"
        // required
        mapContainerStyle={{
          height: "400px",
          width: "100%",
        }}
        // required
        zoom={2}
        // required
        center={{
          lat: 0,
          lng: -180,
        }}
      >
        {destination !== "" && origin !== "" && (
          <DirectionsService
            // required
            options={{
              destination: destination,
              origin: origin,
              travelMode: "DRIVING",
            }}
            // required
            callback={directionsCallback}

            // optional
          />
        )}

        {response !== null && (
          <DirectionsRenderer
            // required
            options={{
              directions: response,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default DirectionMap;
