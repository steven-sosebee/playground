import React, { useState, createContext, useContext } from "react";

export const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState("standard");

  return (
    <ModalContext.Provider value={{ modal: modal, setModal: setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
