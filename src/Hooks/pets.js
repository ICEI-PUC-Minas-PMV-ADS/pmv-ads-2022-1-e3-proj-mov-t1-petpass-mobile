import React, { createContext, useState } from "react";

const PetContext = createContext(undefined, undefined);

const PetProvider = ({ children }) => {
  const [seila, setseila] = useState(1);

  return (
    <PetContext.Provider value={{ seila, setseila }}>
      {children}
    </PetContext.Provider>
  );
};

export { PetProvider };
export default PetContext;
