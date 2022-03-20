import { View, Text } from "react-native";
import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const DonorChatIcon = () => {
  return (
    <Svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_d_50_39)">
        <Path
          d="M10.875 4C9.84729 4 8.86166 4.40826 8.13496 5.13496C7.40826 5.86166 7 6.84729 7 7.875L7 32.6614C7.00004 32.8531 7.05695 33.0405 7.16352 33.1998C7.27009 33.3591 7.42154 33.4833 7.59869 33.5565C7.77584 33.6297 7.97073 33.6488 8.15869 33.6112C8.34666 33.5736 8.51925 33.4811 8.65462 33.3454L14.1823 27.8177C14.5456 27.4543 15.0383 27.2501 15.5521 27.25H34.125C35.1527 27.25 36.1383 26.8417 36.865 26.115C37.5917 25.3883 38 24.4027 38 23.375V7.875C38 6.84729 37.5917 5.86166 36.865 5.13496C36.1383 4.40826 35.1527 4 34.125 4H10.875ZM22.5 11.7364C25.724 8.42137 33.7859 14.2222 22.5 21.6797C11.2141 14.2203 19.276 8.42137 22.5 11.7364Z"
          fill="url(#paint0_linear_50_39)"
        />
      </G>
      <Defs>
        {/* <Filter
          id="filter0_d_50_39"
          x="0"
          y="0"
          width="45"
          height="45"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood flood-opacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="3" />
          <FeGaussianBlur stdDeviation="3.5" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0.517647 0 0 0 0 0.705882 0 0 0 0 0.878431 0 0 0 1 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_50_39"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_50_39"
            result="shape"
          />
        </Filter> */}
        <LinearGradient
          id="paint0_linear_50_39"
          x1="22.5"
          y1="4"
          x2="22.5"
          y2="33.63"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#A4C8EA" />
          <Stop offset="1" stop-color="#297ECA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export { DonorChatIcon };
