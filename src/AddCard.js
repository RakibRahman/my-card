import React from "react";
import { Flex } from "@chakra-ui/react";

import { useData } from "./context/context";
import { Card } from "./Card";
import { AddButton } from "./Button";
export const AddCard = () => {
  const { state } = useData();
  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <Flex flexDirection="column" w="400px" mx="auto" align="center" gridGap="3">
      <AddButton />
      <Flex flexDirection="column" gridGap="3" w="100%" color="#f5f5f5">
        {state.card.map((card, index) => (
          <Card
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
