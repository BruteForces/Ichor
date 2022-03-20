import React from 'react';
import { Box, HStack, VStack, Text, Pressable } from 'native-base';
import { Profile } from './Profile';
import { Colors } from '../Design/Colors';
import { ReadReceiptIcon } from '../icons';


const ChatCard = ({ Pressed }) => {
  return (
    <Box
      bg={Colors.SalientGray}
      justifyContent="space-between"
      alignSelf="center"
      borderRadius={15}
      py={3}
      px={5}
      w="95%"

    >
      <HStack>
        <Profile size={-3} />
        <VStack
          flex={1}
          p={2}
          px={3}

        >
          <Text
            fontSize={16}
            fontWeight="bold"
          >Naruto Uzumaki</Text>
          <Text color={Colors.SecondaryText}>Hey! Can we Mee...</Text>
        </VStack>
        <VStack

          py={3}
          px={3}
          justifyContent="center"

        >
          {Pressed ?
            (<Pressable >
              <Text fontSize={20} alignSelf="center" fontWeight="bold" color={Colors.BloodRed}>X</Text>
            </Pressable>) :
            (<Box>
              <Text fontSize={13} color={Colors.SecondaryText}>9.45 PM</Text>
              <Box alignSelf="flex-end">
                <ReadReceiptIcon />
              </Box>
            </Box>)}
        </VStack>
      </HStack>
    </Box>
  )
}

export { ChatCard };