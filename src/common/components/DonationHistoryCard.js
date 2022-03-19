import React from "react";
import { Divider, HStack, Text, VStack } from "native-base";
import { Profile } from "./Profile";

const DonationHistoryCard = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center" px="3" py="3">
      <VStack>
        <Profile size={-3.5} />
      </VStack>
      <VStack space={3}>
        <VStack>
          <Text>Donated To</Text>
          <Text fontWeight="bold" fontSize="md">
            Naruto Uzumaki
          </Text>
        </VStack>
        <Divider />
      </VStack>
      <VStack>
        <Text>2nd Feb</Text>
      </VStack>
    </HStack>
  );
};

export { DonationHistoryCard };
