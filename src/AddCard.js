import React from "react";
import { Flex, ScaleFade, useDisclosure } from "@chakra-ui/react";

import { useData } from "./context/context";
import { Card } from "./Card";
import { AddButton } from "./Button";

export const AddCard = () => {
  const { state, dispatch } = useData();
  const { isOpen, onToggle } = useDisclosure();
  React.useEffect(() => {
    console.log("index:", state.selectedCard);
  }, [state]);

  return (
    <Flex>
      <Flex
        flexDirection="column"
        w="400px"
        mx="auto"
        align="center"
        gridGap="3"
      >
        {state.card.length > 0 ? null : (
          <AddButton
            onClick={() => {
              onToggle();
              dispatch({ type: "add_card" });
            }}
          />
        )}

        <Flex flexDirection="column" gridGap="3" w="100%" color="#f5f5f5">
          {state.card.map((card, index) => (
            <ScaleFade initialScale={0.9} in={isOpen}>
              <Flex
                flexDirection="column"
                align="center"
                key={index.toString()}
              >
                <Card
                  onClick={() =>
                    dispatch({ type: "get_card_info", payload: index })
                  }
                  title={card?.title}
                  description={card?.description}
                  bgColor={card?.bgColor}
                />
                <AddButton
                  onClick={() => {
                    dispatch({ type: "add_new_card", payload: index + 1 });
                  }}
                />
              </Flex>
            </ScaleFade>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
