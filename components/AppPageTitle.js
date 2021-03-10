import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AppPageTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "grey",
    margin: 20,
    fontWeight: "800",
  },
});
export default AppPageTitle;
