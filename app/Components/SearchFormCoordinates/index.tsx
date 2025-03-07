"use client"
import React from "react";
import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

type SearchFormCoordinatesProps = {
  onAddMarker: (coordinates: [number, number]) => void;
};

const SearchFormCoordinates: React.FC<SearchFormCoordinatesProps> = ({ onAddMarker }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (!isNaN(lat) && !isNaN(lng)) {
      onAddMarker([lat, lng]); 
      setLatitude("")
      setLongitude("")
    }else{
      alert("Preencha corretamente a latitude e a longitude ")
    }
  };


  return (
    <form className=" w-96 absolute top-20 left-5 z-[1000] bg-white p-2 rounded-xl shadow-md">
      <label className=" w-full flex text-xl  text-indigo-600 justify-center"> add sensor </label>
      <Input type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder="Latitude"   />
      <Input type="number" value={longitude} onChange={(e) =>  setLongitude(e.target.value)} placeholder="Longitude" />
      <div className="pt-3 mx-10">
      <Button type="submit" name="Search" onClick={handleSubmit}/>

      </div>

    </form>
  );
};

export default SearchFormCoordinates;
