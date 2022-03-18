import React, { useState } from "react";
import { useAuthDispatchContext } from "../context/auth/AuthContext";
import { facebookLogin, googleLogin, loginUser } from "../context/auth/actions";
import { HOME_SCREEN, REGISTER_SCREEN } from "./constants";
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
} from "native-base";
import { FacebookLoginButton, GoogleLoginButton } from "../common/components";
import { Colors } from "../common/Design/Colors";

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatchContext();

  const onFooterLinkPress = () => {
    navigation.navigate(REGISTER_SCREEN);
  };

  const onLoginPress = () => {
    loginUser(dispatch, {
      email,
      password,
    })
      .then(() => {
        navigation.navigate(HOME_SCREEN);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onFacebookLogin = () => {
    facebookLogin(dispatch)
      .then(() => {})
      .catch((err) => {
        alert(err);
      });
  };
  const onGoogleLogin = () => {
    googleLogin(dispatch)
      .then((res) => {})
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Box safeArea flex={1} w="90%" mx="auto">
      <Center>
        <Heading my={"10"} color={Colors.PrimaryBg}>
          Log In
        </Heading>
        <VStack space={3}>
          <VStack space={5}>
            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
          </VStack>
          <Button
            onPress={onLoginPress}
            bg={Colors.PrimaryBg}
            _text={{
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>

          <VStack my={10} space="3">
            <GoogleLoginButton />
            <FacebookLoginButton />
          </VStack>

          <HStack mx="auto">
            <Text fontWeight={"bold"} color={Colors.SecondaryText}>
              Don't have an account?{" "}
            </Text>
            <Link
              onPress={() => {
                navigation.navigate(REGISTER_SCREEN);
              }}
              _text={{
                color: Colors.Link,
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Register
            </Link>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
};

export { LoginScreen };
