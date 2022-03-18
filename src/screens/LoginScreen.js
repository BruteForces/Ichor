import { View } from "react-native";
import React, { useState } from "react";
import { useAuthDispatchContext } from "../context/auth/AuthContext";
import { facebookLogin, googleLogin, loginUser } from "../context/auth/actions";
import { HOME_SCREEN, REGISTER_SCREEN } from "./constants";

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
  return <View></View>;
};

export { LoginScreen };
