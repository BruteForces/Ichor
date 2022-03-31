import React from 'react';
import { Box, HStack, VStack, Text, Pressable } from 'native-base';
import { Profile } from './Profile';
import { Colors } from '../Design/Colors';
import { ReadReceiptIcon } from '../icons';

export default function RankerCard() {
  return (
    <Box width="100%" alignItems="center" position="relative" >
      <HStack  >
        <Box position="absolute" >
          <Profile size={1} />
        </Box>
        <Box
          zIndex={-1}
          bg={Colors.LightGray}
          // justifyContent="space-between"
          alignSelf="center"
          borderRadius={100}
          py={5}
          pl={20}
          w="75%"
         

        >
          <VStack>

            <HStack
              flex={1}
              pr={4}
              justifyContent="space-between"
              space={3}
            >
              <Text
                fontSize={18}
                fontWeight="bold"
                color={Colors.PureWhite}
              >Naruto Uzumaki</Text>
              <VStack alignItems="center">
                <Text fontSize={18}
                  fontWeight="bold" color={Colors.BloodRed}>1.2K</Text>
              </VStack>
            </HStack>

          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}



export { RankerCard };