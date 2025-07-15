"use client";
import MapComponent from "@/app/Components/MapComponent";
import React, { useEffect, useState } from "react";



const savedCoordinates = () => {
  const [coordinates, setCoordinates] = useState([]);



  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch("https://new-aquila-back.onrender.com/sensors");
        const data = await response.json();

        const coords = data.map((sensor:any) => {
          const [lng, lat] = sensor.location.coordinates
          return [lat,lng]
        });
        setCoordinates(coords);
        console.log("aqui",coords,)

      } catch (error) {
        console.error("Erro ao buscar sensores:", error);
      }
    };
    fetchCoordinates();
  }, []);

  return(
    <MapComponent coordinates={coordinates} />

  ) 
};

export default savedCoordinates;
