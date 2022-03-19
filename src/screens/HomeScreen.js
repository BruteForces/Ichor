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
  StatusBar,
  Text,
  VStack,
} from "native-base";
import { Colors } from "../common/Design/Colors";
import { DetailsIcon, SearchIcon } from "../common/icons";
import { DonorCard } from "../common/components/DonorCard";
import Profile from "../common/components/Profile";

const Header = () => {
  return (
    <Box bg={Colors.PrimaryBg}>
      <Flex
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
        py="15"
        px={"15"}
      >
        <VStack>
          <Text fontSize={"20"} fontWeight="bold" color={Colors.PureWhite}>
            Hi, Naruto Uzumaki
          </Text>
          <Text color={Colors.PureWhite}>Hidden Leaf Village, Konaha</Text>
        </VStack>
        <Profile size={-1} />
      </Flex>
    </Box>
  );
};

const Stats = () => {
  return (
    <Box bg={Colors.PrimaryBg} px="2" pb="5" pt="4">
      <VStack>
        <HStack
          borderTopRadius={"8"}
          bg={Colors.PureWhite}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          w="full"
          px="25"
          py="17"
        >
          <HStack space={1} alignItems="center">
            <DetailsIcon />
            <Text>blood.</Text>
            <Text fontWeight="bold" fontSize={"15"}>
              A
            </Text>
          </HStack>
          <HStack space={1} alignItems="center">
            <Text>age.</Text>
            <Text fontWeight="bold" fontSize={"15"}>
              24
            </Text>
          </HStack>
          <HStack space={1} alignItems="center">
            <Text>weight.</Text>
            <Text fontWeight="bold" fontSize={"15"}>
              65 Kg
            </Text>
          </HStack>
        </HStack>
        <HStack
          px="15"
          py="13"
          bg={Colors.DarkGray}
          borderBottomRadius={"8"}
          w="full"
          justifyContent={"space-evenly"}
        >
          <Button borderRadius="15" bg={Colors.PureWhite}>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              space={2}
            >
              <VStack>
                <Text fontWeight="bold" fontSize="15" color={Colors.DarkBlue}>
                  Blood
                </Text>
                <Text fontWeight="bold" fontSize="15" color={Colors.DarkBlue}>
                  Points
                </Text>
              </VStack>
              <Text fontWeight="bold" fontSize="30" color={Colors.BloodRed}>
                1.2K
              </Text>
            </HStack>
          </Button>
          <Button borderRadius="15" bg={Colors.PureWhite}>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              space={2}
            >
              <VStack>
                <Text fontWeight="bold" fontSize="15" color={Colors.DarkBlue}>
                  Search
                </Text>
                <Text fontWeight="bold" fontSize="15" color={Colors.DarkBlue}>
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
      <StatusBar
        backgroundColor={Colors.PrimaryBg}
        animated={true}
        barStyle="light-content"
        showHideTransition={"fade"}
        hidden={true}
      />
      <VStack>
        <Header />
        <ScrollView mb={"20"}>
          <Stats />
          <Text
            mt="15px"
            mx="18px"
            w="full"
            fontWeight="bold"
            color={Colors.DarkGray}
            fontSize="18px"
          >
            Nearby Donors
          </Text>
          <VStack px={18} pt={4} pb={8} space={2}>
            <DonorCard />
            <DonorCard />
            <DonorCard />
            <DonorCard />
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
};

export { HomeScreen };
