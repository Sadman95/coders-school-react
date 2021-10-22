import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  margin: "32px auto",
};

const center = {
  lat: 22.3661311,
  lng: 91.8214208,
};

const Map = () => {
  return (
    <div>
      <h1 className="spanned">Find Us</h1>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
