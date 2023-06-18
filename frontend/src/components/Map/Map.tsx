import { useLocation } from "../../contexts";
import DestinationLocationMarker from "./DestinationLocationMarker";
import LocationMarker from "./LocationMarker";
import SourceLocationMarker from "./SourceLocationMarker";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import React, { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map: FC = () => {
  const { position } = useLocation();
  const URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
      <TileLayer attribution={attribution} url={URL} />
      <LocationMarker />

      <SourceLocationMarker />
      <DestinationLocationMarker />
    </MapContainer>
  );
};

export default Map;
