import React from "react";
import { Svg, Path } from "react-native-svg";
import { Colors } from "../Design/Colors";

const PencilIcon = () => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M10.8837 24.6338L22.5 13.0175L16.9825 7.5L5.36625 19.1163C5.20633 19.2764 5.09273 19.4768 5.0375 19.6963L3.75 26.25L10.3025 24.9625C10.5225 24.9075 10.7237 24.7938 10.8837 24.6338ZM26.25 9.2675C26.7187 8.79868 26.982 8.16291 26.982 7.5C26.982 6.83709 26.7187 6.20132 26.25 5.7325L24.2675 3.75C23.7987 3.28132 23.1629 3.01804 22.5 3.01804C21.8371 3.01804 21.2013 3.28132 20.7325 3.75L18.75 5.7325L24.2675 11.25L26.25 9.2675Z"
        fill="white"
      />
    </Svg>
  )
}

export { PencilIcon };