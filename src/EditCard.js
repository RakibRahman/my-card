import React from "react";
import {
  Flex,
  Input,
  Heading,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
export const EditCard = () => {
  const [value, setValue] = React.useState("1");
  React.useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Flex w="400px" color="#f5f5f5" flexDirection="column" gridGap="3">
      <Heading>Edit Card</Heading>
      <Input defaultValue="demo title" />
      <Input defaultValue="demo description" />
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
