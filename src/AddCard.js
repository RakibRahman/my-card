import React from "react";
import { Flex } from "@chakra-ui/react";

import { useData } from "./context/context";
import { Card } from "./Card";
import { AddButton } from "./Button";
export const AddCard = () => {
  const { state, dispatch } = useData();

  return (
    <Flex flexDirection="column" w="400px" mx="auto" align="center" gridGap="3">
      <AddButton onClick={() => dispatch({ type: "add_card" })} />

      <Flex
        flexDirection="column"
        gridGap="3"
        w="100%"
        color="#f5f5f5"
        border="1px solid red"
      >
        {state.card?.map((card, index) => (
          <Card
            onClick={() => dispatch({ type: "get_card_info", payload: card })}
            key={index}
            title={card.title}
            description={card.description}
            bgColor="#1f1e1f"
          />
        ))}
      </Flex>
    </Flex>
  );
};
