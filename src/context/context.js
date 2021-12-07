import React, { createContext, useContext, useReducer } from "react";

import { reducer, initState } from "./reducer";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
