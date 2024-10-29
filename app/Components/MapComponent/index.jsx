// components/MapComponent.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Modal from "../Modal";
import SearchFormCoordinates from "../SearchFormCoordinates";


// Configurar o ícone do marcador
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/marker.svg",
  shadowUrl: "/marker-shadow.svg",

});

const MapComponent = ({ coordinates }) => {

  const center = coordinates.length > 0 ? coordinates[0] : [51.505, -0.09];

  return (
    <div style={{ position: "relative", height: "800px", width: "100%" }}>
 
    <SearchFormCoordinates/>
    

    <MapContainer
      center={center}
      zoom={3}
      style={{ height: "800px", width: "100%" }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      
    
          {coordinates.map((coords, i) => (
            <Marker position={coords} key={i}>
              <Popup>
                <Modal />
                coordenadas : {coords[0]}, {coords[1]}
              </Popup>
            </Marker>
          ))}
    </MapContainer>
    </div>

  );
  
};

export default MapComponent;

