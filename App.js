import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Screen style={styles.container}>
      <LoginScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
