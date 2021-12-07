import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { colorStyle } from "./colorStyle";

export const Card = ({ title, description, bgColor, onClick }) => {
  return (
    <Flex
      flexDirection="column"
      justify="center"
      align="center"
      onClick={onClick}
      _hover={{
        transition: "all 0.3s ease-in-out",
        transform: "scale(1.03)",
      }}
    >
      <Box
        boxShadow="25px 25px 50px #1b1c1b, -25px -25px 50px #2d302f"
        bg="#000"
        width="300px"
        p="3"
        cursor="pointer"
        mb="2"
        borderRadius="5"
      >
        <Heading letterSpacing="1px"> {title} </Heading>
        <Text> {description} </Text>
        <Flex gridGap="4" mt="2">
          <Box
            bg={colorStyle.red}
            w="6"
            h="6"
            borderRadius="50%"
            boxShadow={bgColor === "#ff304f" ? colorStyle.redStyle : ""}
          ></Box>
          <Box
            bg={colorStyle.blue}
            w="6"
            h="6"
            borderRadius="50%"
            boxShadow={bgColor === "#28c7fa" ? colorStyle.blueStyle : ""}
          ></Box>
          <Box
            bg={colorStyle.green}
            w="6"
            h="6"
            borderRadius="50%"
            boxShadow={bgColor === "#0b8457" ? colorStyle.greenStyle : ""}
          ></Box>
        </Flex>
      </Box>
    </Flex>
  );
};
