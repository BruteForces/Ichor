import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const BloodIcon = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.7467 9.87111L10.0823 0.605556L4.83339 9.80778C3.61117 11.7578 3.5045 14.2933 4.78839 16.3933C6.61339 19.3783 10.5456 20.3367 13.5723 18.5361C16.5978 16.7361 17.5717 12.8583 15.7467 9.87111Z"
        fill="#ED354F"
      />
    </Svg>
  );
};

export { BloodIcon };
