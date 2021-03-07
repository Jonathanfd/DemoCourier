import React from "react";
import { StyleSheet } from "react-native";
import Screen from "./components/Screen";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/AppNavigation";

export default function App() {
  return (
    <Screen style={styles.container}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
