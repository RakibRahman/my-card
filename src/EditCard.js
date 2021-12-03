import React, { useState } from "react";
import {
  Flex,
  Input,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useData } from "./context/context";
export const EditCard = () => {
  const { state, dispatch } = useData();

  const [value, setValue] = useState("1");

  const [formState, setFormState] = useState({
    id: state.selectedCard?.id,
    title: state.selectedCard?.title,
    description: state.selectedCard?.description,
  });

  // React.useEffect(() => {
  //   setFormState(state.selectedCard);
  // }, [state.selectedCard]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(state.card);
    dispatch({
      type: "update_card",
      payload: {
        id: formState.id,
        title: formState.title,
        description: formState.description,
      },
    });
    console.log(state.selectedCard);
  };
  const onChangeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    dispatch({
      type: "update_card",
      payload: {
        id: formState.id,
        title: formState.title,
        description: formState.description,
      },
    });
    console.log(state.selectedCard);
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
        <Input defaultValue={state.selectedCard?.id} readOnly />
        <Input
          defaultValue={state.selectedCard?.title}
          name="title"
          onChange={onChangeHandler}
        />
        <Input
          defaultValue={state.selectedCard?.description}
          name="description"
          onChange={onChangeHandler}
        />

        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="red" colorScheme="red">
              Red
            </Radio>
            <Radio value="blue" colorScheme="blue">
              Blue
            </Radio>
            <Radio value="green" colorScheme="green">
              Green
            </Radio>
          </Stack>
        </RadioGroup>
        {/* <Button type="submit">Save</Button> */}
      </Flex>
    </>
  );
};
