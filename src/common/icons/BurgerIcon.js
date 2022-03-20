import React from "react";
import Svg, { Path } from "react-native-svg";

const BurgerIcon = () => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z"
        fill="black"
      />
    </Svg>
  );
};

export { BurgerIcon };
