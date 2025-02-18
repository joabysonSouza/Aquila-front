"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SearchFormCoordinates from "../SearchFormCoordinates";
import Modal from "../Modal";

// Configurar o ícone do marcador
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/marker.svg",
  shadowUrl: "/marker-shadow.svg",
});

const MapComponent = ({ coordinates }) => {
  const coordinatesStart = [51.505, -0.09];
  const center = coordinates.length > 0 ? coordinates[0] : coordinatesStart;
  
  const [markers, setMarkers] = useState(coordinates || []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const mapRef = useRef(null);

  // Atualiza referência para estado atualizado do modal
  const modalOpenRef = useRef(modalIsOpen);
  useEffect(() => {
    modalOpenRef.current = modalIsOpen;
  }, [modalIsOpen]);

  const handleAddMarker = (newMarker) => {
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    if (mapRef.current) {
      mapRef.current.setView(newMarker, 10);
    }
  };

  const MapEvents = () => {
    useMapEvents({
      click: (e) => {
        if (modalOpenRef.current) {
          console.log("Modal está aberto. Nenhum marcador será criado.");
          return;
        }
        const newMarker = [e.latlng.lat, e.latlng.lng];
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
        console.log("Criou um marcador", newMarker);
      },
    });
    return null;
  };

  return (
    <div style={{ position: "relative", height: "800px", width: "100%" }}>
      <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 1000, background: "white", padding: "10px", borderRadius: "5px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
        <SearchFormCoordinates onAddMarker={handleAddMarker} />
      </div>
      <MapContainer
        center={center}
        zoom={3}
        style={{ height: "800px", width: "100%" }}
        whenCreated={(map) => (mapRef.current = map)}
        closePopupOnClick={!modalIsOpen}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapEvents />

        {markers.map((coords, i) => (
          <Marker
            position={coords}
            key={i}
            eventHandlers={{ click: () => setModalIsOpen(true) }}
          >
            <Popup className="w-80">
              <Modal showCoordinates={coords}>
                <p>Latitude: {coords[0].toFixed(3)}</p>
                <p>Longitude: {coords[1].toFixed(3)}</p>
              </Modal>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
