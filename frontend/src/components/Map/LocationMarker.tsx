import { Typography, Button, Stack } from "@mui/material";
import { useLocation } from "../../contexts";
import { divIcon } from "leaflet";
import React, { FC } from "react";
import { Marker, useMapEvents, Popup } from "react-leaflet";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

const LocationMarker: FC = () => {
  const { position, setPosition, setSourcePosition, setDestPosition } = useLocation();

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const pinIcon = divIcon({
    html: `
    <svg width="36" height="52" viewBox="0 0 36 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="location-marker__svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 52C18 52 36 34.8302 36 18.1509C36 8.12645 27.9411 0 18 0C8.05887 0 0 8.12645 0 18.1509C0 34.8302 18 52 18 52ZM18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30Z" fill="#172B5F"/>
      <circle cx="18" cy="18" r="12" fill="#fff"/>
      </svg>`,
    className: "location-marker",
    iconSize: [36, 52],
    iconAnchor: [18, 52],
  });

  return (
    <Marker icon={pinIcon} position={position}>
      <Popup>
        <Stack>
          <Button
            sx={{ textTransform: "none", py: 0, height: "40px" }}
            onClick={() => {
              setSourcePosition(position), map.closePopup();
            }}
          >
            <TripOriginIcon sx={{ color: "green.main", mr: 1 }} />
            <Typography>Ustaw tu punkt startowy</Typography>
          </Button>
          <Button
            sx={{ textTransform: "none", py: 0, height: "40px" }}
            onClick={() => {
              setDestPosition(position), map.closePopup();
            }}
          >
            <TripOriginIcon sx={{ color: "blue.main", mr: 1 }} />
            <Typography>Ustaw tu punkt końcowy</Typography>
          </Button>
        </Stack>
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
