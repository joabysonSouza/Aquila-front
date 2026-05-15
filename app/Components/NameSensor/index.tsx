import React, { useEffect, useState } from 'react';

const NameSensor = ({ markerCoords }: { markerCoords: any }) => {
  const [sensorName, setSensorName] = useState('');

  useEffect(() => {
    try {
      // Pega os sensores do localStorage
      const storedData = localStorage.getItem("sensors");
      const sensors = storedData ? JSON.parse(storedData) : [];

      // Procura o sensor pelas coordenadas
      const foundSensor = sensors.find((sensor: any) => {
        const [lng, lat] = sensor.location.coordinates;

        return (
          lng === markerCoords[1] &&
          lat === markerCoords[0]
        );
      });

      if (foundSensor) {
        setSensorName(foundSensor.sensor_name);
      } else {
        setSensorName('Sensor não nomeado');
      }

    } catch (error) {
      console.error('Erro ao buscar sensores:', error);
      setSensorName('Erro ao buscar nome');
    }
  }, [markerCoords]);

  return (
    <div className='w-80 text-red-700'>
      <p>Sensor: {sensorName}</p>
    </div>
  );
};

export default NameSensor;