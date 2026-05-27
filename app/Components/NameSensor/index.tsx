import React, { useEffect, useState } from "react";
import Button from "../Button";

const NameSensor = ({
  markerCoords,
  onDeleteMarker,
}: {
  markerCoords: any;
  onDeleteMarker: (coords: any) => void;
}) => {
  const [sensorName, setSensorName] = useState("");

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("sensors");
      const sensors = storedData ? JSON.parse(storedData) : [];

      const foundSensor = sensors.find((sensor: any) => {
        const [lng, lat] = sensor.location.coordinates;

        return lng === markerCoords[1] && lat === markerCoords[0];
      });

      if (foundSensor) {
        setSensorName(foundSensor.sensor_name);
      } else {
        setSensorName("Sensor não nomeado");
      }
    } catch (error) {
      console.error("Erro ao buscar sensores:", error);
      setSensorName("Erro ao buscar nome");
    }
  }, [markerCoords]);

  const handleDeleteSensor = () => {
    try {
      const storedData = localStorage.getItem("sensors");
      const sensors = storedData ? JSON.parse(storedData) : [];

      const updatedSensors = sensors.filter((sensor: any) => {
        const [lng, lat] = sensor.location.coordinates;

        return !(lng === markerCoords[1] && lat === markerCoords[0]);
      });

      localStorage.setItem("sensors", JSON.stringify(updatedSensors));

      onDeleteMarker(markerCoords);

      setSensorName("Sensor removido");
    } catch (error) {
      console.error("Erro ao deletar sensor:", error);
    }
  };

  return (
    <div className="w-full text-red-700">
      <p>Sensor: {sensorName}</p>

      <div>
        <Button
          name="Delete Sensor"
          type="button"
          bgColor="bg-red-400"
          hoverColor="hover:bg-red-600"
          onClick={handleDeleteSensor}
        />
      </div>
    </div>
  );
};

export default NameSensor;
