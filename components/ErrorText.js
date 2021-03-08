import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ErrorText({ error }) {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  error: {
    color: "red",
    fontSize: 15,
  },
});
export default ErrorText;
