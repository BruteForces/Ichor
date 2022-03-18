import { View } from "react-native";

import React, { useState } from "react";
import { useAuthDispatchContext } from "../context/auth/AuthContext";
import { registerUser } from "../context/auth/actions";
import {
  Button,
  Center,
  Heading,
  Input,
  Box,
  VStack,
  Icon,
  Divider,
  HStack,
  Text,
  Link,
} from "native-base";
import { GoogleIcon } from "../common/icons";
import { FacebookIcon } from "../common/icons/FacebookIcon";
import { Colors } from "../common/Design/Colors";
import { LOGIN_SCREEN } from "./constants";

const RegisterScreen = ({ navigation, route }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useAuthDispatchContext();

  const onRegisterPress = () => {
    registerUser(dispatch, {
      fullName,
      email,
      password,
    }).catch((err) => {
      alert(err);
    });
  };

  return (
    <Box safeArea flex={1} w="90%" mx="auto">
      <Center>
        <Heading my={"10"} color={Colors.PrimaryBg}>
          Register
        </Heading>
        <VStack space={3}>
          <VStack space={5}>
            <Input
              w="xs"
              value={fullName}
              placeholder="Name"
              onChangeText={setFullName}
            />
            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
            <Input
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </VStack>
          <Button
            onPress={onRegisterPress}
            bg={Colors.PrimaryBg}
            _text={{
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>

          <VStack my={10} space="3">
            <Button leftIcon={<GoogleIcon />} bg="white" shadow={1}>
              Log In With Google
            </Button>
            <Button
              leftIcon={<FacebookIcon />}
              bg={Colors.Social.Facebook}
              _text={{
                color: Colors.Social.Google,
              }}
              shadow={1}
            >
              Log In With Facebook
            </Button>
          </VStack>

          <HStack mx="auto">
            <Text fontWeight={"bold"} color={Colors.SecondaryText}>
              Already have a account?{" "}
            </Text>
            <Link
              onPress={() => {
                navigation.navigate(LOGIN_SCREEN);
              }}
              _text={{
                color: Colors.Link,
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Log in
            </Link>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
};

export { RegisterScreen };
