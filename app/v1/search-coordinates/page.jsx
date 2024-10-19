"use client";
import { useState } from "react";
import CoordinateForm from "../../Components/CoordinateForm";
import MapComponent from "../../Components/MapComponent";

const searchCoordinates = () => {
  const [coordinatesList, setCoordinatesList] = useState([[51.505, -0.09]]); // Posição padrão

  const handleCoordinatesSubmit = (coords) => {
    setCoordinatesList((prevList)=> [...prevList, coords]);
  };

  return (
    <div>
      <h1>Digite Coordenadas</h1>
       <CoordinateForm onSubmit={handleCoordinatesSubmit} /> 
      <MapComponent coordinates={coordinatesList} />
    </div>
  );
};
export default searchCoordinates;
