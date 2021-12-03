import React from "react";
import { Button } from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";

export const AddButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      bg="#3a79ba"
      color="#f5f5f5"
      _hover={{
        bg: "#3a79ba",
        opacity: 0.7,
        border: "none",
        transform: "scale(1.02)",
      }}
      w="30"
    >
      <MdAddCircle />
    </Button>
  );
};
