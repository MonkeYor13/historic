import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { destinationData } from "../constants";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Destinations() {
  const navigation = useNavigation;
  return (
    <View style={styles.container}>
      {destinationData.map((item, index) => {
        return (
          <DestinationCard navitgation={navigation} item={item} key={index} />
        );
      })}
    </View>
  );
}

export const DestinationCard = ({ navigation, item, index }) => {
  let isEven = index % 2 === 0;

  const [isfavorite, toggleFavorite] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Destination", { ...item })}
      style={styles.Destinationcard}
    >
      <Image source={item.image} style={styles.avatar} />

      <TouchableOpacity
        onPress={() => toggleFavorite(!isfavorite)}
        style={styles.heartIcon}
      >
        <AntDesign name="heart" size={24} color="red" />
      </TouchableOpacity>

      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  Destinationcard: {
    justifyContent: "flex-end",
    position: "relative",
    padding: 16,
    paddingVertical: 24,
    gap: 5,
    marginBottom: 28,
    width: wp(44),
    height: hp(45),
    // backgroundColor: 'red'
  },
  avatar: {
    position: "absolute",
    width: wp(44),
    height: hp(45),
    borderRadius: 35,
  },
  heartIcon: {
    borderRadius: 50,
    padding: 12,
    backgroundColor: "#d3d3d3",
    position: "absolute",
    top: 16,
    right: 16,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: wp(5),
  },
});
