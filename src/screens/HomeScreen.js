import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Colors } from "../common/Design/Colors";
import { DetailsIcon, SearchIcon } from "../common/icons";

const Header = () => {
  return (
    <Box bg={Colors.PrimaryBg}>
      <Flex
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
        py="20px"
        px={"20px"}
      >
        <VStack>
          <Text fontSize={"24px"} fontWeight="bold" color={Colors.White}>
            Hi, Naruto Uzumaki
          </Text>
          <Text color={Colors.White}>Hidden Leaf Village, Konaha</Text>
        </VStack>
        <Image
          source={require("../common/images/naruto.jpg")}
          alt="profile"
          size={70}
          borderRadius={100}
        />
      </Flex>
    </Box>
  );
};

const Stats = () => {
  return (
    <Box bg={Colors.PrimaryBg} px="13px" pb="26px" pt="15px">
      <VStack>
        <HStack
          borderTopRadius={"8px"}
          bg={Colors.White}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          w="full"
          px="25px"
          py="17px"
        >
          <HStack space={1} alignItems="center">
            <DetailsIcon />
            <Text>blood.</Text>
            <Text fontWeight="bold" fontSize={"18px"}>
              A
            </Text>
          </HStack>
          <HStack space={1} alignItems="center">
            <Text>age.</Text>
            <Text fontWeight="bold" fontSize={"18px"}>
              24
            </Text>
          </HStack>
          <HStack space={1} alignItems="center">
            <Text>weight.</Text>
            <Text fontWeight="bold" fontSize={"18px"}>
              65 Kg
            </Text>
          </HStack>
        </HStack>
        <HStack
          px="19px"
          py="13px"
          bg={Colors.DarkGray}
          borderBottomRadius={"8px"}
          w="full"
          justifyContent={"space-evenly"}
        >
          <Button borderRadius="27px" px="23px" py="12px" bg={Colors.White}>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              space={2}
            >
              <VStack>
                <Text fontWeight="bold" fontSize="18px" color={Colors.DarkBlue}>
                  Blood
                </Text>
                <Text fontWeight="bold" fontSize="18px" color={Colors.DarkBlue}>
                  Points
                </Text>
              </VStack>
              <Text fontWeight="bold" fontSize="30px" color={Colors.BloodRed}>
                1.2K
              </Text>
            </HStack>
          </Button>
          <Button borderRadius="27px" px="23px" py="12px" bg={Colors.White}>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              space={2}
            >
              <VStack>
                <Text fontWeight="bold" fontSize="18px" color={Colors.DarkBlue}>
                  Search
                </Text>
                <Text fontWeight="bold" fontSize="18px" color={Colors.DarkBlue}>
                  Donors
                </Text>
              </VStack>
              <SearchIcon />
            </HStack>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

const HomeScreen = ({ navigation, route }) => {
  return (
    <Box safeArea flex={1} w="full">
      <VStack>
        <Header />
        <ScrollView>
          <Stats />
        </ScrollView>
      </VStack>
    </Box>
  );
};

export { HomeScreen };
