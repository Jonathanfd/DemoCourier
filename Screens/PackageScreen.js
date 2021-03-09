import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import getPackages from "../api/getPackagesAPI";
import AppHeader from "../components/AppHeader";
import PackageCard from "../components/PackageCard";
// const dataTest = [
//   {
//     description: "Television 32 pulgadas",
//     status: "Retenido por aduanas",
//     date: "3/8/2021",
//     image: require("../assets/icono_warning_bps.png"),
//   },
//   {
//     description: "iPhone XS",
//     status: "Disponible para retirar",
//     date: "3/8/2021",
//     image: require("../assets/green_check.png"),
//   },
//   {
//     description: "2 camisas y 1 pantalon",
//     status: "Recibido miami",
//     date: "3/7/2021",
//     image: require("../assets/box.png"),
//   },
//   {
//     description: "1 Laptop",
//     status: "Embarcado",
//     date: "3/7/2021",
//     image: require("../assets/avion.png"),
//   },
//   {
//     description: "Television 32 pulgadas - 2",
//     status: "Retenido por aduanas",
//     date: "3/8/2021",
//     image: require("../assets/icono_warning_bps.png"),
//   },
//   {
//     description: "iPhone XS - 2",
//     status: "Disponible para retirar",
//     date: "3/8/2021",
//     image: require("../assets/green_check.png"),
//   },
//   {
//     description: "2 camisas y 1 pantalon - 2",
//     status: "Recibido miami",
//     date: "3/7/2021",
//     image: require("../assets/box.png"),
//   },
//   {
//     description: "1 Laptop - 2",
//     status: "Embarcado",
//     date: "3/7/2021",
//     image: require("../assets/avion.png"),
//   },
// ];
function PackageScreen({ route }) {
  const packages = route.params.packages;
  console.log(packages);

  const imageStatusSelector = (status) => {
    let image = "";
    if (status === "Retenido por aduanas") {
      image = require("../assets/icono_warning_bps.png");
    } else if (status === "Disponible para retirar") {
      image = require("../assets/green_check.png");
    } else if (status === "Embarcado") {
      image = require("../assets/avion.png");
    } else if (status === "Recibido miami") {
      image = require("../assets/box.png");
    }
    return image;
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <FlatList
        data={packages}
        keyExtractor={(item) => item.description.toString() + Math.random()}
        renderItem={({ item }) => {
          let info = item.statusHistory;

          let statusImage = imageStatusSelector(
            item.statusHistory[0].description
          );

          return (
            <>
              <PackageCard
                description={item.description}
                status={info[0].description}
                date={info[0].date}
                icon={statusImage}
              />
            </>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
export default PackageScreen;
