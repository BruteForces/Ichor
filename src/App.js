import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import {
  useAuthContext,
  useAuthDispatchContext,
} from "./context/auth/AuthContext";
import {
  CHAT_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  TOP_DONORS_SCREEN,
} from "./screens/constants";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ChatScreen,
  TopDonorsScreen,
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { LOGIN_SUCCESS } from "./context/auth/constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
const App = () => {
  const { user } = useAuthContext();
  const dispatch = useAuthDispatchContext();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        <MainTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size, focused }) => {},
          }}
        >
          <MainTab.Screen
            name={TOP_DONORS_SCREEN}
            component={TopDonorsScreen}
          />
          <MainTab.Screen name={HOME_SCREEN} component={HomeScreen} />
          <MainTab.Screen name={CHAT_SCREEN} component={ChatScreen} />
        </MainTab.Navigator>
      ) : (
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen
            name={GETTING_STARTED_SCREEN}
            component={GettingStarted}
          /> */}
          <AuthStack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
          <AuthStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
