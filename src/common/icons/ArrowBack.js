import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowBack = () => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 -5 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.67 3.87001L9.9 2.10001L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.87001Z"
        fill="#FFFFFF"
      />
    </Svg>
  );
};

export { ArrowBack };
