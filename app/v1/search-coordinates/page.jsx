"use client";
import { useContext } from "react";
import {SearchCoordinatesContext } from "../../context/SearchCoordinatesContext";
import MapComponent from "../../Components/MapComponent";

const SearchCoordinates = () => {
 
const {coordinatesList} = useContext(SearchCoordinatesContext)

  return (
    <div>
      <MapComponent coordinates={coordinatesList} /> 
 
     
    </div>
  );
};
export  default SearchCoordinates 
