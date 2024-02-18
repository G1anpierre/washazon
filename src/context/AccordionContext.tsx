"use client";

import React, { createContext, useContext, useState } from "react";

type ProductPageContextType = {
  state: boolean[];
  setState: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const CartContext = createContext<ProductPageContextType>({
  state: [true, false],
  setState: () => {},
});

export const useAccordionContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useAccordionContext must be used within a AccordionProvider"
    );
  }
  return context;
};

export const AccordionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState([true, false]);

  return (
    <CartContext.Provider value={{ state, setState }}>
      {children}
    </CartContext.Provider>
  );
};
