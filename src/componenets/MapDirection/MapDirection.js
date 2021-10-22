import React, { useState } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  DirectionsService,
} from "@react-google-maps/api";

const location = {
  lat: 22.3661311,
  lng: 91.8214208,
};

const MapDirection = () => {
  const [response, setResponse] = useState(null);

  const directionsCallback = (res) => {
    if (response !== null) {
      setResponse(res);
    }
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        // required
        id="direction-example"
        // required
        mapContainerStyle={{
          height: "400px",
          width: "100%",
        }}
        // required
        zoom={15}
        // required
        center={location}
      >
        <DirectionsService
          // required
          options={{
            origin: "nasirabad, chittagong",
            destination: "chawkbazar circle, chittagong",
            travelMode: "DRIVING",
          }}
          // required
          callback={directionsCallback}
        />

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
    </div>
  );
};

export default MapDirection;
