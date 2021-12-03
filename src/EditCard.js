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
  const { state } = useData();

  const [value, setValue] = React.useState("1");
  React.useEffect(() => {
    console.log(state.selectedCard);
  }, [state.selectedCard]);
  return (
    <Flex w="400px" color="#f5f5f5" flexDirection="column" gridGap="3">
      <Heading>Edit Card</Heading>
      <Input defaultValue={state.selectedCard?.id} />
      <Input defaultValue={state.selectedCard?.title} />
      <Input defaultValue={state.selectedCard?.description} />
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
    </Flex>
  );
};
