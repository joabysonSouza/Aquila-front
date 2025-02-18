"use client"
import { useState } from "react";

type SearchFormCoordinatesProps = {
  onAddMarker: (coordinates: [number, number]) => void;
};

const SearchFormCoordinates: React.FC<SearchFormCoordinatesProps> = ({ onAddMarker }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (!isNaN(lat) && !isNaN(lng)) {
      onAddMarker([lat, lng]); // Chama a função passada pelo MapComponent
    }
  };


  //TODO FALTA CONCERTA O ESTILO DO SEARCH-COORDINATES 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder="Latitude" />
      <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder="Longitude" />
      <button type="submit">Adicionar Marcador</button>
    </form>
  );
};

export default SearchFormCoordinates;
