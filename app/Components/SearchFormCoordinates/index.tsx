"use client";
import React, { useContext, useState } from "react";
import Button from "../Button";
import { SearchCoordinatesContext } from "../../context/SearchCoordinatesContext";

const SearchFormCoordinates = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const { handleCoordinatesSubmit } = useContext(SearchCoordinatesContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);
 
    setLatitude("")
    setLongitude("")

    if (!isNaN(lat) && !isNaN(lon)) {
      handleCoordinatesSubmit([lat, lon]);
      setLatitude("");
      setLongitude("");
    } else {
      alert("Por favor, insira valores válidos para latitude e longitude.");
    }
  };
  
  return (
    <>
      <form
        className="w-36 absolute top-3 left-20 z-999 bg-white p-3 rounded-lg boxShadow-3xl sm:w-96"
        onSubmit={handleSubmit}
      >
        <input
          type="number"
          className="w-full rounded-md text-sm  "
          placeholder="latitude"
          value={latitude}
          step="any"
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="number"
          placeholder="longitude"
          value={longitude}
          className="w-full rounded-md  text-sm my-2 "
          step="any"
          onChange={(e) => setLongitude(e.target.value)}
        />

        <Button name="Search" type="submit" />
      </form>
    </>
  );
};

export default SearchFormCoordinates;
