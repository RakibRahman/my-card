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

  const [value, setValue] = useState("1");

  const [formState, setFormState] = useState(state.card[state.selectedCard]);

  React.useEffect(() => {}, [state]);

  // ! working demo
  React.useEffect(() => {
    setFormState(state.cardInfo);
  }, [state.cardInfo]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const onChangeHandler = (e) => {
    e.preventDefault();

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
        <Input defaultValue={formState?.id} />
        <Input
          defaultValue={formState?.title}
          name="title"
          onChange={(e) => onChangeHandler(e)}
        />
        <Input
          defaultValue={formState?.description}
          name="description"
          onChange={(e) => onChangeHandler(e)}
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
