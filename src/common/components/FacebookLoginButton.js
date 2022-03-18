import React from "react";
import { FacebookIcon } from "../icons/FacebookIcon";
import { Colors } from "../Design/Colors";
import { Button } from "native-base";

const FacebookLoginButton = () => {
  return (
    <Button
      leftIcon={<FacebookIcon />}
      bg={Colors.Social.Facebook}
      _text={{
        color: Colors.Social.Google,
      }}
      shadow={1}
    >
      Log In With Facebook
    </Button>
  );
};

export { FacebookLoginButton };
