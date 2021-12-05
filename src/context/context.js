import React, { createContext, useContext, useReducer } from "react";
import { nanoid } from "nanoid";
const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

const initState = {
  card: [],
  selectedCard: null,
  cardInfo: null,
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "reload_data": {
      return state;
    }
    case "add_card": {
      const info = {
        id: nanoid(),
        title: `demo card ${state.count}`,
        description: `This is card ${state.count}`,
        bgColor: "",
      };
      return { ...state, card: [...state.card, info], count: state.count++ };
    }

    case "get_card_info": {
      const index = action.payload;
      return { ...state, cardInfo: state.card[index], selectedCard: index };
    }

    case "add_new_card": {
      const selectedIndex = action.payload;
      const addAfter = (array, index, newItem) => {
        return [...array.slice(0, index), newItem, ...array.slice(index)];
      };
      const newArray = addAfter(state.card, selectedIndex + 1, {
        id: nanoid(),
        title: `demo card ${state.count}`,

        description: `This is card ${state.count}`,
        bgColor: "",
      });
      return {
        ...state,
        card: newArray,
        count: state.count++,
      };
    }

    case "update_card": {
      let newArr = [...state.card];
      newArr[state.selectedCard] = action.payload;

      return {
        ...state,
        card: newArr,
      };
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
