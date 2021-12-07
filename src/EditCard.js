import React from "react";
import {
  Flex,
  Input,
  Heading,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useData } from "./context/context";
export const EditCard = () => {
  const { state, dispatch } = useData();
  const card =
    state.selectedCard !== null ? state.card[state.selectedCard] : null;

  const onChangeHandler = (e) => {
    const draftCard = { ...card, [e.target.name]: e.target.value };
    dispatch({
      type: "update_card",
      payload: draftCard,
    });
  };

  return (
    card && (
      <Flex w="400px" color="#f5f5f5" flexDirection="column" gridGap="3">
        <Heading>Edit Card</Heading>

        <Input
          focusBorderColor="lime"
          value={card?.title}
          name="title"
          type="text"
          onChange={onChangeHandler}
        />
        <Input
          focusBorderColor="lime"
          type="text"
          value={card?.description}
          name="description"
          onChange={onChangeHandler}
        />

        <RadioGroup name="bgColor">
          <Stack direction="row">
            <Radio onChange={onChangeHandler} value="#ff304f" colorScheme="red">
              Red
            </Radio>
            <Radio
              onChange={onChangeHandler}
              value="#28c7fa"
              colorScheme="blue"
            >
              Blue
            </Radio>
            <Radio
              onChange={onChangeHandler}
              value="#0b8457"
              colorScheme="green"
            >
              Green
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
    )
  );
};
