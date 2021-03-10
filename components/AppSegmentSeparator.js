import React from "react";
import { View, StyleSheet } from "react-native";

function AppSegmentSeparator() {
  return <View style={styles.container} />;
}
const styles = StyleSheet.create({
  container: {
    height: 0.5,
    backgroundColor: "darkgrey",
  },
});
export default AppSegmentSeparator;
