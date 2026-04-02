import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import React from "react";
import {Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

import RootStackNavigator from "./RootStackNavigator";
import {useAppStyle} from "../context/AppStyleContext";

export default function Navigation() {
  const {type} = useAppStyle();

  return (
    <>
      <Text style={{color: "white"}}>{"TEST2"}</Text>
      <NavigationContainer theme={type === "dark" ? DarkTheme : DefaultTheme}>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  );
}
