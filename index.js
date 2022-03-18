/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import React from "react";
import ContextProvider from "./src/context";

const Root = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
