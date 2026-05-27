"use client";
import MapComponent from "@/app/Components/MapComponent";
import React, { useEffect, useState } from "react";

const SavedCoordinates = () => {
  const [coordinates, setCoordinates] = useState<any[]>([]);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("sensors");
      const sensors = storedData ? JSON.parse(storedData) : [];

      const coords = sensors.map((sensor: any) => {
        const [lng, lat] = sensor.location.coordinates;
        return [lat, lng];
      });

      setCoordinates(coords);
    } catch (error) {
      console.error("Erro ao carregar sensores:", error);
    }
  }, []);

  return <MapComponent coordinates={coordinates} />;
};

export default SavedCoordinates;
