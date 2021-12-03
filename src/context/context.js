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
      const selectedIndex = action.payload;
      const addAfter = (array, index, newItem) => {
        return [...array.slice(0, index), newItem, ...array.slice(index)];
      };
      const newArray = addAfter(state.card, selectedIndex + 1, {
        id: nanoid(),
        title: "demo",
        description: "lorem ipsum dolor sit",
      });
      return {
        ...state,
        card: newArray,
      };
    }
    case "update_card": {
      const newCard = state.card.map((card) =>
        card.id === action.payload.id
          ? {
              ...card,
              title: action.payload.title,
              description: action.payload.description,
            }
          : card
      );

      return {
        ...state,
        card: newCard,
      };

      // return {
      //   ...state,
      //   card: [
      //     ...state.card.filter((el) => el.id !== action.payload.id),
      //     action.payload,
      //   ],
      // };
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
