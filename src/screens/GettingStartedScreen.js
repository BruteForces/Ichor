import React from "react";
import { Center, Container, Text, VStack } from "native-base";
const GettingStarted = ({ navigation, route }) => {
  return (
    <Center height="full">
      <VStack>
        <Text bg={"black"} color={"white"}>
          GettingStarted
        </Text>
      </VStack>
    </Center>
  );
};

export { GettingStarted };
