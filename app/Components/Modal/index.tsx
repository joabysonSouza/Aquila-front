"use client";

import { ReactNode, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { usePathname } from "next/navigation";


//TODO Evitando que ao clicar no mapa quando o modal estiver aberto não gere um ponto no mapa

type ModalTypes = {
  showCoordinates?: [number, number];
  children?: ReactNode;
};

const Modal = ({ showCoordinates, children }: ModalTypes) => {
 
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
      coordinates: selectedCoords,
    },
  };

  const handleSave = async () => {
    if (!data) {
      alert("insira um nome para a coordenada");
      return;
    }

    try {
      const response = await fetch("http://localhost:3005/sensors",{
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      });

      if (response.ok) {
        alert("Dados enviados com sucesso");
        setData("");
      } else {
        console.log(data);
        
        
      }
    } catch (erro: any) {
      alert("erro no servidor ");
      console.log("Erro no servidor", erro);
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
      <div className="">{children}</div>

      <Button type="submit" name="Save" onClick={handleSave} />
    </div>
  );
};

export default Modal;
