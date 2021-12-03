import React, { createContext, useContext, useReducer } from "react";
import { nanoid } from "nanoid";
const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

const initState = {
  card: [],
  selectedCard: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add_card": {
      const info = {
        id: nanoid(),
        title: "demo",
        description: "lorem ipsum dolor sit",
      };
      return { ...state, card: [...state.card, info] };
    }
    case "get_card_info": {
      const data = action.payload;
      return { ...state, selectedCard: Object.assign({}, data) };
    }
    case "add_new_card": {
      return {};
    }
    default:
      return state;
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
