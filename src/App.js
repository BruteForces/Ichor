import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import {
  useAuthContext,
  useAuthDispatchContext,
} from "./context/auth/AuthContext";
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from "./screens/constants";
import { HomeScreen, LoginScreen, RegisterScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { LOGIN_SUCCESS } from "./context/auth/constants";

const Stack = createNativeStackNavigator();

const App = () => {
  const { user } = useAuthContext();
  const dispatch = useAuthDispatchContext();

  // useEffect(() => {
  //   auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch({ type: LOGIN_SUCCESS, payload: user });
  //     }
  //   });
  // }, []);

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
