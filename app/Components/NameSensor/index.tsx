import React, { useEffect, useState } from 'react';

const NameSensor = ({ markerCoords}: {markerCoords:any}) => {
  const [sensorName, setSensorName] = useState('');

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch('https://new-aquila-back.onrender.com/sensors');
        const data = await response.json();

        const foundSensor = data.find((sensor: any) => {
          const [lng, lat] = sensor.location.coordinates;
          return (
            lng === markerCoords[1] && lat === markerCoords[0]
          );
        });

        if (foundSensor) {
          setSensorName(foundSensor.sensor_name);
        } else {
          setSensorName('Nome não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar sensores:', error);
        setSensorName('Erro ao buscar nome');
      }
    };

    fetchCoordinates();
  }, [markerCoords]);

  return (
    <div className='w-80 text-red-700'>
      <p>Sensor: {sensorName}</p>
    </div>
  );
};

export default NameSensor;
