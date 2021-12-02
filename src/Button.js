import React from "react";
import { Button } from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import { useData } from "./context/context";

export const AddButton = () => {
  const { dispatch } = useData();

  return (
    <Button
      onClick={() => dispatch({ type: "add_card" })}
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
