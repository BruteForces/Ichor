import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { Box } from "native-base";

const VerticalRuleSVG = (props) => {
  return (
    <Box {...props}>
      <Svg
        width="2"
        height="61"
        viewBox="0 0 2 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1 0V60.5"
          stroke="#A69B9B"
          stroke-opacity="0.44"
          stroke-width="2"
          stroke-dasharray="3 3"
        />
      </Svg>
    </Box>
  );
};

export { VerticalRuleSVG };
