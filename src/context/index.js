import { NativeBaseProvider } from "native-base";
import React from "react";
import { AuthContextProvider } from "./auth/AuthContext";

const ContextProvider = ({ children }) => {
  return (
    <NativeBaseProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </NativeBaseProvider>
  );
};

export default ContextProvider;
