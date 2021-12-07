import { nanoid } from "nanoid";

export const initState = {
  card: [],
  selectedCard: null,
  cardInfo: null,
  count: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add_card": {
      const info = {
        id: nanoid(),
        title: `demo card ${state.count}`,
        description: `This is card ${state.count}`,
        bgColor: "#000000",
      };
      return {
        ...state,
        card: [...state.card, info],
        count: state.count++,
        selectedCard: 0,
      };
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

      const newArray = addAfter(state.card, selectedIndex, {
        id: nanoid(),
        title: `demo card ${state.count}`,
        description: `This is card ${state.count}`,
        bgColor: "#000000",
      });

      return {
        ...state,
        card: newArray,
        count: state.count++,
        selectedCard: action.payload,
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
