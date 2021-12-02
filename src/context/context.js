import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

const initState = {
  card: [],
  formState: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add_card": {
      const info = {
        title: "demo",
        description: "lorem ipsum dolor sit",
      };
      return {
        card: [...state.card, info],
      };
    }
    default:
      throw new Error();
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
