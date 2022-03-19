import { View, Text } from "react-native";
import React from "react";
import Svg, { Defs, Path, RadialGradient, Stop } from "react-native-svg";

const SearchIcon = () => {
  return (
    <Svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20.8333 37.5C24.5312 37.4992 28.1225 36.2613 31.0354 33.9833L40.1937 43.1417L43.1395 40.1958L33.9812 31.0375C36.2604 28.1243 37.4991 24.5322 37.5 20.8333C37.5 11.6437 30.0229 4.16666 20.8333 4.16666C11.6437 4.16666 4.16663 11.6437 4.16663 20.8333C4.16663 30.0229 11.6437 37.5 20.8333 37.5ZM20.8333 8.33332C27.727 8.33332 33.3333 13.9396 33.3333 20.8333C33.3333 27.7271 27.727 33.3333 20.8333 33.3333C13.9395 33.3333 8.33329 27.7271 8.33329 20.8333C8.33329 13.9396 13.9395 8.33332 20.8333 8.33332Z"
        // fill="#6C96BD"
        fill="#0870D0"
        // fill="url(#paint0_radial_19_98)"
      />
      <Path
        d="M23.775 17.8875C24.5645 18.6792 25 19.725 25 20.8333H29.1666C29.1685 19.7384 28.9533 18.6539 28.5335 17.6427C28.1136 16.6314 27.4976 15.7134 26.7208 14.9417C23.5666 11.7917 18.0979 11.7917 14.9458 14.9417L17.8875 17.8917C19.4708 16.3125 22.2 16.3167 23.775 17.8875Z"
        // fill="#6C96BD"
        fill="#0870D0"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_19_98"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.6531 23.6542) rotate(90) scale(19.4875 19.4865)"
        >
          <Stop stop-color="#84C1F9" />
          <Stop offset="1" stop-color="#0870D0" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export { SearchIcon };
