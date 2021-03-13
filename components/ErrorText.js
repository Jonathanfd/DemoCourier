import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import { ErrorMessageContext } from "../context/AppContext";

function ErrorText() {
  const errorMessage = useContext(ErrorMessageContext);
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{errorMessage}</Text>
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
