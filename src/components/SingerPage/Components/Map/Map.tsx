import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IMap } from "./MapValidator.ts";

const customIcon = new L.Icon({
  iconUrl: "./images/pin.png", 
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32], 
});

const Map = (props: IMap) => {
  const { Latitude, Longitude, Title } = props.Data;

  return (
    <MapContainer
      center={[Latitude, Longitude]}
      zoom={13}
      style={props.style}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker 
        position={[Latitude, Longitude]}
        icon={customIcon}>
        <Popup>{Title}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
