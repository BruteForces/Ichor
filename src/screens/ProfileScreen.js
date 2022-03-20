import React from "react";
import {
  Box,
  Heading,
  HStack,
  Menu,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Colors } from "../common/Design/Colors";
import {
  ArrowBack,
  BloodIcon,
  BurgerIcon,
  DetailsIcon,
  HistoryIcon,
  SuccessIcon,
} from "../common/icons";
import { DonationHistoryCard, Profile } from "../common/components";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="20"
      pt={4}
      bg={Colors.SalientGray}
      borderBottomRadius={20}
    >
      <VStack space={3} alignItems="center">
        <HStack
          w="full"
          px={5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowBack />
          </Pressable>
          <Text fontWeight="bold" fontSize="md" color={Colors.DarkGray}>
            @databayyo
          </Text>
          <Box>
            {/* <Menu
              onOpen={() => {
                console.log("Hello");
              }}
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <BurgerIcon />
                  </Pressable>
                );
              }}
            >
              <Menu.Item>Edit</Menu.Item>
              <Menu.Item>Sign Out</Menu.Item>
            </Menu> */}
          </Box>
        </HStack>
        <UserCard />
      </VStack>
    </Box>
  );
};

const UserCard = () => {
  return (
    <Box py="4" bg={Colors.PrimaryBg} borderRadius={20} w="full">
      <VStack alignItems="center" py="4" space={3}>
        <Profile />
        <VStack alignItems="center">
          <Text color={Colors.PureWhite} fontWeight="bold">
            Naruto Uzumaki
          </Text>
          <Text color={Colors.SlightGray}>Hidden Leaf Village, Konaha</Text>
          <HStack space={2} alignItems="center">
            <HStack space={1} alignItems="center">
              <BloodIcon />
              <Text color={Colors.SlightGray}>A1+ve</Text>
            </HStack>
            <HStack space={1} alignItems="center">
              <DetailsIcon />
              <Text color={Colors.SlightGray}>Age</Text>
            </HStack>
            <HStack space={1} alignItems="center">
              <SuccessIcon />
              <Text color={Colors.SlightGray}>Ready to Donate</Text>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

const ProfileScreen = () => {
  return (
    <Box safeArea>
      <Header />
      <ScrollView mt="280" pt="15" px="5">
        <HStack space={1} alignItems="center">
          <HistoryIcon />
          <Text fontWeight="bold" color={Colors.DarkGray}>
            Donation History
          </Text>
        </HStack>
        <VStack>
          <DonationHistoryCard />
          <DonationHistoryCard />
          <DonationHistoryCard />
          <DonationHistoryCard />
          <DonationHistoryCard />
          <DonationHistoryCard />
        </VStack>
      </ScrollView>
    </Box>
  );
};

export { ProfileScreen };
