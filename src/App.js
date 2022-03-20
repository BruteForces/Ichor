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
  HOME_TABS,
  LOGIN_SCREEN,
  PROFILE_SCREEN,
  REGISTER_SCREEN,
  TOP_DONORS_SCREEN,
} from "./screens/constants";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ChatScreen,
  TopDonorsScreen,
  ProfileScreen,
} from "./screens";
import { ChatIcon, HomeIcon, MedalIcon } from "./common/icons";
import { NavigationContainer } from "@react-navigation/native";
import { LOGIN_SUCCESS } from "./context/auth/constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Box } from "native-base";

const AuthStack = createNativeStackNavigator();
const HomeTab = createBottomTabNavigator();
const MainTab = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <HomeTab.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === HOME_SCREEN) {
            return <HomeIcon focused={focused} />;
          } else if (route.name === CHAT_SCREEN) {
            return (
              <Box mt={2}>
                <ChatIcon focused={focused} />
              </Box>
            );
          } else if (route.name === TOP_DONORS_SCREEN) {
            return <MedalIcon focused={focused} />;
          }
        },
      })}
    >
      <HomeTab.Screen name={TOP_DONORS_SCREEN} component={TopDonorsScreen} />
      <HomeTab.Screen component={HomeScreen} name={HOME_SCREEN} />
      <HomeTab.Screen name={CHAT_SCREEN} component={ChatScreen} />
    </HomeTab.Navigator>
  );
};

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
          }}
        >
          <MainTab.Screen name={HOME_TABS} component={HomeTabs} />
          <MainTab.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
        </MainTab.Navigator>
      ) : (
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <AuthStack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
          <AuthStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
