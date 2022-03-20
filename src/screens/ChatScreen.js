import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
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
import { PencilIcon, TickIcon } from "../common/icons";

import { Profile } from "../common/components";
import { ChatCard } from "../common/components";
import { PROFILE_SCREEN } from "./constants";


const ChatScreen = ({ navigation, route }) => {
  const [pressed, setPressed] = useState(false);

  const onProfileClickHandler = () => {
    navigation.navigate(PROFILE_SCREEN);
  }
  const onPencilClickHandler = () => {
    setPressed(!pressed);
  }
  return (
    <View >
      <Box safeArea w="100%" h="100%" >
        <Box w="100%" h="10%" bg={Colors.PrimaryBg}>
          <VStack
            flex={1}
            justifyContent="center"
          >
            <HStack
              mx={4}
              alignItems="center"
              justifyContent="space-between"
            >
              <Pressable onPress={onPencilClickHandler}>
                {pressed ? <TickIcon /> : <PencilIcon />}
              </Pressable>
              <Text fontSize={20} fontWeight="bold" color={Colors.PureWhite} >Messages</Text>
              <Pressable onPress={onProfileClickHandler}>
                <Profile size={-2} />
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

              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
              <ChatCard Pressed={pressed} />
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </View>
  );
};

export { ChatScreen };
