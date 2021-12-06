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

  // const [formState, setFormState] = useState(state.card[state.selectedCard]);
  const [formState, setFormState] = useState(null);

  React.useEffect(() => {
    // console.log(state.card);
  }, [state]);
  React.useEffect(() => {}, [state.lastCardInfo]);

  // ! working demo
  React.useEffect(() => {
    setFormState(state.cardInfo);
  }, [state.cardInfo]);

  //! updating lastCardInfo
  React.useEffect(() => {
    // console.log("bgColor changed");
    // console.log(state);
    setFormState(state.lastCardInfo);
  }, [state.lastCardInfo]);

  //! keeping eye on formState
  React.useEffect(() => {
    console.log(formState);
  }, [formState, state.lastCardInfo]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    dispatch({
      type: "update_card",
      payload: formState,
    });
  };

  return (
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

      <RadioGroup name="bgColor">
        <Stack direction="row">
          <Radio onChange={onChangeHandler} value="#ff304f" colorScheme="red">
            Red
          </Radio>
          <Radio onChange={onChangeHandler} value="#28c7fa" colorScheme="blue">
            Blue
          </Radio>
          <Radio onChange={onChangeHandler} value="#0b8457" colorScheme="green">
            Green
          </Radio>
        </Stack>
      </RadioGroup>

      {/* <Button type="submit">Save</Button> */}
    </Flex>
  );
};
