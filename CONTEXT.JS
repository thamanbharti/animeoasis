import React, { createContext, useState, useContext } from "react";

const context = createContext();

export const ContextProvider = ({ children }) => {
  const [userId, setUser] = useState(null);

  const setuser = (id) => {
    setUser(id);
  };

  return (
    <context.Provider value={{ userId, setuser }}>{children}</context.Provider>
  );
};

export const useUser = () => {
  return useContext(context);
};
