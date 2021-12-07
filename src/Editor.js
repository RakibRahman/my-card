import React from "react";
import { colorStyle } from "./colorStyle";
import { Input, RadioGroup, Radio, Stack } from "@chakra-ui/react";
export const Editor = ({ onChange, card }) => {
  return (
    <>
      <Input
        focusBorderColor="lime"
        value={card?.title}
        name="title"
        type="text"
        onChange={onChange}
      />
      <Input
        focusBorderColor="lime"
        type="text"
        value={card?.description}
        name="description"
        onChange={onChange}
      />

      <RadioGroup name="bgColor">
        <Stack direction="row">
          <Radio onChange={onChange} value={colorStyle.red} colorScheme="red">
            Red
          </Radio>
          <Radio onChange={onChange} value={colorStyle.blue} colorScheme="blue">
            Blue
          </Radio>
          <Radio
            onChange={onChange}
            value={colorStyle.green}
            colorScheme="green"
          >
            Green
          </Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};
