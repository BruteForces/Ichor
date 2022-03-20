import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
  Pressable,
  ScrollView
} from "native-base";
import { Colors } from "../common/Design/Colors";
import { PencilIcon } from "../common/icons";
import { Profile } from "../common/components";
import { ChatCard } from "../common/components";

const ChatScreen = () => {
  const onProfileClick = () => {
    console.log("Profile Clicked");
  }
  return (
    <View >
      <Box safeArea w="100%" h="100%" >
        <Box w="100%" h="80px" bg={Colors.PrimaryBg}>
          <VStack
            flex={1}
            justifyContent="center"
          >
            <HStack
              mx={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <PencilIcon />
              <Text fontSize={"20"} fontWeight="bold" color={Colors.PureWhite} >Messages</Text>
              <Pressable onPress={onProfileClick}>
                <Profile size={-1} />
              </Pressable>
            </HStack>
          </VStack>
        </Box>
        <Box
          w="100%"
          h="100%"
          bg={Colors.PureWhite}

        >
          <ScrollView>
            <VStack
              flex={1}
              space={3}
              mt={2}
            >

              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </View>
  );
};

export { ChatScreen };
