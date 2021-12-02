import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { AddButton } from "./Button";
export const Card = ({ title, description, bgColor }) => {
  return (
    <Flex
      flexDirection="column"
      justify="center"
      align="center"
      onClick={() => console.log("card clicked")}
    >
      <Box
        bg={bgColor}
        width="300px"
        p="3"
        cursor="pointer"
        mb="2"
        borderRadius="5"
      >
        <Heading> {title} </Heading>
        <Text> {description} </Text>
        <Flex gridGap="2" mt="2">
          <Box bg="red" w="6" h="6" borderRadius="50%"></Box>
          <Box bg="blue" w="6" h="6" borderRadius="50%"></Box>
          <Box bg="green" w="6" h="6" borderRadius="50%"></Box>
        </Flex>
      </Box>
      <AddButton />
    </Flex>
  );
};
