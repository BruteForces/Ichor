import React from "react";
import { Center, Icon } from "native-base";
import { G, Path, Svg, Rect, Defs, ClipPath } from "react-native-svg";
const FacebookIcon = () => {
  return (
    <Center>
      <Icon viewBox="0 0 25 25">
        <Svg
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <G clip-path="url(#clip0_1_170)">
            <Rect
              width="24"
              height="24"
              transform="translate(0.345947)"
              fill="#1877F2"
            />
            <Path
              d="M23.8459 12.0699C23.8459 5.7186 18.6972 0.56988 12.3459 0.56988C5.99467 0.56988 0.845947 5.7186 0.845947 12.0699C0.845947 17.8099 5.05133 22.5674 10.5491 23.4302V15.3941H7.62915V12.0699H10.5491V9.53629C10.5491 6.6541 12.2659 5.06207 14.8928 5.06207C16.151 5.06207 17.467 5.28668 17.467 5.28668V8.11675H16.0169C14.5883 8.11675 14.1428 9.00322 14.1428 9.91266V12.0699H17.3323L16.8224 15.3941H14.1428V23.4302C19.6406 22.5674 23.8459 17.8099 23.8459 12.0699Z"
              fill="white"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_1_170">
              <Rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.345947)"
              />
            </ClipPath>
          </Defs>
        </Svg>
      </Icon>
    </Center>
  );
};

export { FacebookIcon };
