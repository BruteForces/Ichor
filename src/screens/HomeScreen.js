import React from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Colors } from "../common/Design/Colors";

const Header = () => {
  return (
    <Box bg={Colors.PrimaryBg}>
      <HStack>
        <VStack py={"5"} px={"3"}>
          <Text fontSize={"xl"} fontWeight="bold" color={Colors.White}>
            Hi, HemsWorth
          </Text>
          <Text color={Colors.White}>NYC, New York, United States</Text>
        </VStack>
        <Image></Image>
      </HStack>
    </Box>
  );
};

const HomeScreen = ({ navigation, route }) => {
  return (
    <Box safeArea flex={1} mx="auto">
      <VStack>
        <Header></Header>
        <ScrollView>
          <Box p="3">
            <Text>Stats</Text>
          </Box>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
          <Text>Mock</Text>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export { HomeScreen };
