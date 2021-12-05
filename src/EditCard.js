import React, { useState } from "react";
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

  const [formState, setFormState] = useState(state.card[state.selectedCard]);

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  // ! working demo
  React.useEffect(() => {
    setFormState(state.cardInfo);
  }, [state.cardInfo]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const onChangeHandler = (e) => {
    // e.preventDefault();

    setFormState({ ...formState, [e.target.name]: e.target.value });
    dispatch({
      type: "update_card",
      payload: formState,
    });
  };

  return (
    <>
      <Flex
        as="form"
        w="400px"
        color="#f5f5f5"
        flexDirection="column"
        gridGap="3"
        onSubmit={onSubmitHandler}
      >
        <Heading>Edit Card</Heading>
        <Input defaultValue={formState?.id} readOnly />
        <Input
          focusBorderColor="lime"
          value={formState?.title}
          name="title"
          type="text"
          onChange={onChangeHandler}
        />
        <Input
          focusBorderColor="lime"
          type="text"
          value={formState?.description}
          name="description"
          onChange={onChangeHandler}
        />

        <RadioGroup>
          <Stack direction="row">
            <Radio
              onChange={onChangeHandler}
              value="red"
              colorScheme="red"
              name="bgColor"
              checked={formState?.bgColor === "red"}
            >
              Red
            </Radio>
            <Radio
              onChange={onChangeHandler}
              value="blue"
              colorScheme="blue"
              name="bgColor"
              checked={formState?.bgColor === "blue"}
            >
              Blue
            </Radio>
            <Radio
              onChange={onChangeHandler}
              value="green"
              colorScheme="green"
              name="bgColor"
              checked={formState?.bgColor === "green"}
            >
              Green
            </Radio>
          </Stack>
        </RadioGroup>

        {/* <Button type="submit">Save</Button> */}
      </Flex>
    </>
  );
};
