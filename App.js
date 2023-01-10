import { LoginScreen } from "./Screens/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useCallback } from "react";
import { Link } from "@react-navigation/native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Home } from "./Screens/Home";

import { Ionicons, Feather } from "@expo/vector-icons";

import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { LogOutButton } from "./components/LogOutButton";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { PostsScreen } from "./Screens/PostsScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";
const Tabs = createBottomTabNavigator();
const useRouter = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        ></MainStack.Screen>
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        ></MainStack.Screen>
      </MainStack.Navigator>
    );
  }
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route, navigation }) => ({
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerRight: () => (
          <LogOutButton navigation={navigation}></LogOutButton>
        ),
        tabBarIcon: ({ focused, color, size = 24 }) => {
          let iconName;

          if (route.name === "ProfileScreen") {
            iconName = "user";
            return (
              <View
                style={{
                  ...styles.rectangle,
                  backgroundColor: "#fff",
                }}
              >
                <Feather name={iconName} size={size} color={color} />
              </View>
            );
          } else if (route.name === "PostsScreen") {
            iconName = "grid-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = "ios-add";
            return (
              <View
                style={{
                  ...styles.rectangle,
                  backgroundColor: "#FF6C00",
                }}
              >
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          }
          return (
            <View
              style={{
                ...styles.rectangle,
              }}
            >
              <Ionicons name={iconName} size={size} color={color} />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      ></Tabs.Screen>

      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const MainStack = createStackNavigator();
export default function App() {
  const routing = useRouter(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  rectangle: {
    borderRadius: 20,
    width: 70,
    height: 40,
    alignItems: "center",
    alignContent: "space-around",
    justifyContent: "center",
  },
});
