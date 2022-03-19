import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { PROFILE_SCREEN } from "./constants";

const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <Pressable>
        <Text>ChatScreen</Text>
      </Pressable>
    </Box>
  );
};

export { ChatScreen };
