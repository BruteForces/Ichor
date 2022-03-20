import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "native-base";

const Profile = ({ size = 1 }) => {
  const radius = size ? 70 + size * 5 : 70;
  return <Avatar size={`${radius}`} source={require("../images/naruto.jpg")} />;
};

export { Profile };
