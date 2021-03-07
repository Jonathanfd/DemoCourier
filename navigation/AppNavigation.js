import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import PackageScreen from "../Screens/PackageScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Packages" component={PackageScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
