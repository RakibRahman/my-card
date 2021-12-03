import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { AddButton } from "./Button";
import { useData } from "./context/context";
export const Card = ({ title, description, bgColor, onClick }) => {
  const { state, dispatch } = useData();
  return (
    <Flex
      flexDirection="column"
      justify="center"
      align="center"
      onClick={onClick}
      // className="animate__animated animate__backInLeft"
    >
      <Box
        boxShadow="25px 25px 50px #1b1c1b, -25px -25px 50px #2d302f"
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
    </Flex>
  );
};
