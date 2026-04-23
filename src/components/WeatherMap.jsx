import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

// animated marker
const icon = L.divIcon({
  className: "custom-marker",
  html: `<div class="pulse"></div>`,
});

// 👇 THIS is the fix
function ChangeView({ lat, lon }) {
  const map = useMap();

  useEffect(() => {
    if (lat && lon) {
      map.setView([lat, lon], 10);
    }
  }, [lat, lon, map]);

  return null;
}

export default function WeatherMap({ lat, lon, city }) {
  if (!lat || !lon) return null;

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        style={{ height: "350px", width: "100%", borderRadius: "16px" }}
      >
        <ChangeView lat={lat} lon={lon} />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lon]} icon={icon}>
          <Popup>
            <b>{city}</b>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}