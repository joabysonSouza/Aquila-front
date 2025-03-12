"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SearchFormCoordinates from "../SearchFormCoordinates";
import Modal from "../Modal";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link"
import SideBar from "../SideBar";

// Configurar o ícone do marcador
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/marker.svg",
  shadowUrl: "/marker-shadow.svg",
});

const MapComponent = ({ coordinates }) => {
  const coordinatesStart = [51.505, -0.09];
  const viewZoom = 3;
  const center = coordinates.length > 0 ? coordinates[0] : coordinatesStart;
  const [markers, setMarkers] = useState(coordinates || []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const mapRef = useRef(null);

  const handleAddMarker = (newMarker) => {
    setMarkers((prevMarkers) => {
      const updatedMarkers = [...prevMarkers, newMarker];
      if (mapRef.current) {
        mapRef.current.setView(newMarker, viewZoom);
      }
      return updatedMarkers;
    });
  };

  const handleMarkerClick = () => {
    setModalIsOpen((prev) => !prev);
  };

  

  const MapEvents = () => {
    const map = useMap();
    useMapEvents({
      click: (e) => {
        if (modalIsOpen) {
          setModalIsOpen(false);
        } else {
          const newMarker = [e.latlng.lat, e.latlng.lng];
          handleAddMarker(newMarker);
        }
      },
    });
    mapRef.current = map;
    return null;
  };

  return (
    <div className="relative h-[800px] w-full">
      <div className="absolute top-5 left-5 z-999 bg-white p-2.5 rounded-md shadow-lg">
        <SearchFormCoordinates onAddMarker={handleAddMarker} />
      </div>

      <div className="absolute top-5 right-5 z-999 bg-white p-2.5 rounded-md shadow-lg">
        
        <SideBar/>
     
      </div>

      <MapContainer
        center={center}
        zoom={3}
        style={{ height: "800px", width: "100%" }}
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
            eventHandlers={{
              click: handleMarkerClick,
            }}
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
