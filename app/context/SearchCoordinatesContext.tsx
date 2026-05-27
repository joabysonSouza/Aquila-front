'use client'
import React, { createContext, ReactNode, useState } from "react";

export const SearchCoordinatesContext = createContext<any>(null);

export const SearchCoordinatesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [coordinatesList, setCoordinatesList] = useState([[51.505, -0.09]]); // Posição padrão

  const handleCoordinatesSubmit = (coords: number[]) => {
    setCoordinatesList((prevList) => [...prevList, coords]);
  };

  

  return (
    <SearchCoordinatesContext.Provider value={{coordinatesList , handleCoordinatesSubmit}}>
      {children}
    </SearchCoordinatesContext.Provider>
  );
};
