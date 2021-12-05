import React from "react";
import { Flex } from "@chakra-ui/react";

import { useData } from "./context/context";
import { Card } from "./Card";
import { AddButton } from "./Button";
export const AddCard = () => {
  const { state, dispatch } = useData();
  React.useEffect(() => {}, [state]);

  return (
    <Flex flexDirection="column" w="400px" mx="auto" align="center" gridGap="3">
      {state.card.length > 0 ? null : (
        <AddButton onClick={() => dispatch({ type: "add_card" })} />
      )}

      <Flex
        flexDirection="column"
        gridGap="3"
        w="100%"
        color="#f5f5f5"
        className="animate__animated animate__backInLeft"
      >
        {state?.card.map((card, index) => (
          <Flex flexDirection="column" align="center" key={index}>
            <Card
              onClick={() =>
                dispatch({ type: "get_card_info", payload: index })
              }
              title={card?.title}
              description={card?.description}
              bgColor="#1f1e1f"
            />
            <AddButton
              onClick={() => {
                console.log("clicked", index);
                dispatch({ type: "add_new_card", payload: index });
              }}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
