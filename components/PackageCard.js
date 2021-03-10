import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function PackageCard({ description, status, date, icon }) {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={icon} style={styles.image} />
        </View>
        <View style={styles.packageInfo}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.status}>{status}</Text>
          <Text style={styles.status}>{date}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    flex: 1,
  },
  description: {
    fontSize: 18,
  },
  status: {
    color: "grey",
  },
  image: {
    width: 40,
    height: 40,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  packageInfo: {
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
export default PackageCard;
