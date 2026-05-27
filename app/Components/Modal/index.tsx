"use client";

import { ReactNode, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { v4 as uuidv4 } from "uuid";
import React from "react";

type ModalTypes = {
  showCoordinates?: [number, number];
  children?: ReactNode;
};

const Modal = ({ showCoordinates, children }: ModalTypes) => {
  const [lat, lng] = showCoordinates ?? [0, 0];

  const fixedLat = Number(lat.toFixed(2));
  const fixedLng = Number(lng.toFixed(2));

  const [data, setData] = useState("");
  const [selectedCoords, setSelectedCoords] = useState(showCoordinates);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event?.target?.value);
  };

  let payLoad = {
    sensor_name: data,
    user_id: uuidv4(),
    location: {
      type: "Point",
      coordinates: [fixedLng, fixedLat],
    },
  };

  const handleSave = async () => {
    if (!data) {
      alert("insira um nome para a coordenada");
      return;
    }

    try {
      const existingData = localStorage.getItem("sensors");

      const sensors = existingData ? JSON.parse(existingData) : [];
      sensors.push(payLoad);

      localStorage.setItem("sensors", JSON.stringify(sensors));

      localStorage.setItem("payLoad", JSON.stringify(payLoad));

      setData("")
      alert("Dados Salvo com sucesso")

    } catch (erro: any) {
      alert("erro no servidor ");

    }
  };

  return (
    <div
      className="w-full flex flex-col justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <Input
        type="text"
        label="Name sensor"
        value={data}
        onChange={handleInputChange}
      />

      <div>
        <p>Latitude: {fixedLat}</p>
        <p> Longitude: {fixedLng}</p>
      </div>

      <Button type="submit" name="Save" onClick={handleSave} />
    </div>
  );
};

export default Modal;
