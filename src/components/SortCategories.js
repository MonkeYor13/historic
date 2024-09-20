import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState("Popular");
  return (
    <View style={styles.container}>
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == activeSort;
        let activeButtonClass = isActive ? styles.active : {};
        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            style={[styles.activeOnPress, activeButtonClass]}
          >
            <Text
              style={{
                color: isActive ? "blue" : "rgba(0,0,0,0.5)",
                fontSize: wp(3),
              }}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    padding: 8,
  },
  active: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  activeOnPress:{
    padding: 12,
    borderRadius: 50,
  }
});
