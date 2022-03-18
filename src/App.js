import React from "react";
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
} from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  useAuthContext,
  useAuthDispatchContext,
} from "./context/auth/AuthContext";
import {
  GETTING_STARTED_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from "./screens/constants";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  GettingStarted,
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const App = () => {
  const { user } = useAuthContext();
  const dispatch = useAuthDispatchContext();

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={HOME_SCREEN}
            component={HomeScreen}
            screenOptions={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen
            name={GETTING_STARTED_SCREEN}
            component={GettingStarted}
          /> */}
          <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
