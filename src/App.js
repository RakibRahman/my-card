import { Flex } from "@chakra-ui/react";
import { AddCard } from "./AddCard";
import { EditCard } from "./EditCard";
import { DataProvider } from "./context/context";
function App() {
  return (
    <Flex
      className="App"
      w="100%"
      justify="space-between"
      bg="#313434"
      minHeight="100vh"
      p="6"
    >
      <DataProvider>
        <AddCard />

        <EditCard />
      </DataProvider>
    </Flex>
  );
}

export default App;
