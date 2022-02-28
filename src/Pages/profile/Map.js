import React from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "./Map.css";


export default function Map(props) {
    let lat= props.coords.lat;
    let lon= props.coords.lng;
    const position = [lat, lon];
    const markericon = new L.Icon({
      iconUrl: require("./img/marker-blue.png"),
      iconSize: [55, 55],
    })

return (
    <MapContainer center={position} zoom={200}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={markericon}>
    </Marker>
  </MapContainer>
  );

}