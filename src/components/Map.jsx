import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = ({ data }) => {
  const [position, setPosition] = useState([50, 50]); // set default position

  useEffect(() => {
    if (data) {
      setPosition([data[0], data[1]]); // update via props
    }
  }, [data]);

  const Recenter = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
  };

  return (
    <MapContainer
      className="map"
      center={[position[0], position[1]]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <Recenter lat={position[0]} lng={position[1]} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Ahaha <br /> You found me!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
