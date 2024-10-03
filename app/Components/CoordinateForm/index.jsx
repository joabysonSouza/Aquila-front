// components/CoordinateForm.jsx
import React, { useState } from 'react';
import Button from '../Button';

const CoordinateForm = ({ onSubmit }) => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const lat = parseFloat(latitude);
        const lon = parseFloat(longitude);
        if (!isNaN(lat) && !isNaN(lon)) {
            onSubmit([lat, lon]);
            setLatitude('');
            setLongitude('');
        } else {
            alert('Por favor, insira valores válidos para latitude e longitude.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                step="any" // Permite valores decimais
                placeholder="Latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
            />
            <input
                type="number"
                step="any" // Permite valores decimais
                placeholder="Longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
            />
            <Button name='Mostar no mapa' type='submit'/>
        </form>
    );
};

export default CoordinateForm;
