import React from "react";
import { Flex } from "@chakra-ui/react";

import { useData } from "./context/context";
import { Card } from "./Card";
import { AddButton } from "./Button";
export const AddCard = () => {
  const { state, dispatch } = useData();
  React.useEffect(() => {}, [state]);
  React.useEffect(() => {
    console.log("Last Item:", state.lastCardInfo);
  }, [state.card, state.lastCardInfo]);
  React.useEffect(() => {}, [state.lastCardInfo]);
  return (
    <Flex flexDirection="column" w="400px" mx="auto" align="center" gridGap="3">
      {state.card.length > 0 ? null : (
        <AddButton
          onClick={() => {
            dispatch({ type: "last_card_info" });

            dispatch({ type: "add_card" });
          }}
        />
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
              bgColor={card?.bgColor}
            />
            <AddButton
              onClick={() => {
                console.log(state.cardInfo);
                dispatch({ type: "last_card_info" });
                dispatch({ type: "add_new_card", payload: index });
              }}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
