import React from "react";
import { Button } from "native-base";
import { GoogleIcon } from "../../icons";
import { googleLogin } from "../../../context/auth/actions";
import { useAuthDispatchContext } from "../../../context/auth/AuthContext";

const GoogleLoginButton = () => {
  const dispatch = useAuthDispatchContext();
  return (
    <Button
      leftIcon={<GoogleIcon />}
      bg="white"
      shadow={1}
      onPress={() => {
        googleLogin(dispatch)
          .then((res) => {})
          .catch((err) => {
            alert(err);
          });
      }}
    >
      Log In With Google
    </Button>
  );
};

export { GoogleLoginButton };
