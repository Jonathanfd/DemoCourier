import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppHeader({ showReturn }) {
  return (
    <View style={styles.container}>
      {showReturn && (
        <MaterialCommunityIcons
          name="chevron-left-circle"
          size={30}
          color="white"
        />
      )}
      <Text style={styles.text}>Demo Courier</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#02A9EA",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "800",
    margin: 20,
  },
});
export default AppHeader;
