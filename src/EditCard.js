import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { Editor } from "./Editor";
import { useData } from "./context/context";
export const EditCard = () => {
  const { state, dispatch } = useData();

  const index = state.selectedCard;
  const card = index !== null ? state.card[index] : null;

  const onChangeHandler = (e) => {
    const draftCard = { ...card, [e.target.name]: e.target.value };
    dispatch({
      type: "update_card",
      payload: draftCard,
    });
  };

  return (
    <Flex flexDirection="column" color="#f5f5f5" justify="start" align="center">
      <Heading textAlign="center">
        {state.card.length > 0 ? "Edit Card" : "Add New Card"}
      </Heading>
      {card && (
        <Flex w="400px" color="#f5f5f5" flexDirection="column" gridGap="3">
          <Editor card={card} onChange={onChangeHandler} />
        </Flex>
      )}
    </Flex>
  );
};
