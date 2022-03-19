import React from "react";
import { Box, Divider, Flex, HStack, Text, VStack } from "native-base";
import Profile from "./Profile";
import { BloodIcon, ChatIcon, DetailsIcon, DonorChatIcon } from "../icons";
import { Colors } from "../Design/Colors";
import { VerticalRuleSVG as VR } from "./VerticalRuleSVG";

const DonorCard = () => {
  return (
    <Box bg={Colors.SalientGray} shadow={2} borderRadius={10} py={2} px={3}>
      <HStack space={1} justifyContent="space-between">
        <VStack alignItems="center" justifyContent="space-between">
          <Profile size={-3} />
          <VR />
          <Box />
        </VStack>
        <VStack space={3}>
          <VStack>
            <Text fontWeight={"bold"} fontSize={"md"}>
              Naruto Uzumaki
            </Text>
            <Text fontSize={"xs"} fontWeight={"light"}>
              Hidden Leaf Village, Konaha
            </Text>
          </VStack>
          <VStack space={2}>
            <VStack>
              <HStack space={1} alignItems="center">
                <BloodIcon />
                <Text fontWeight="bold">Blood Type</Text>
              </HStack>
              <Text ml="6" color={Colors.DarkGray} fontSize={"xs"}>
                A1+ve
              </Text>
            </VStack>
            <VStack>
              <HStack space={2} alignItems="center">
                <DetailsIcon />
                <Text fontWeight="bold">Age</Text>
              </HStack>
              <Text ml="6" color={Colors.DarkGray} fontSize={"xs"}>
                19
              </Text>
            </VStack>
          </VStack>
        </VStack>
        <VStack pt="2">
          <DonorChatIcon />
        </VStack>
      </HStack>
    </Box>
  );
};

export { DonorCard };
