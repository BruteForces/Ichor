import { NativeBaseProvider } from "native-base";
import React from "react";
import { AuthContextProvider } from "./auth/AuthContext";

const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
};

const ContextProvider = ({ children }) => {
  return (
    <NativeBaseProvider config={config}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </NativeBaseProvider>
  );
};


export default ContextProvider;
