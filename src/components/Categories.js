import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { categoriesData } from "../constants";

export default function Categories() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titleMain}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.subTitle}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 16,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((category, index) => {
          return (
            <TouchableOpacity key={index} style={styles.card}>
              <Image source={category.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{category.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  titleMain: {
    fontWeight: "bold",
    color: "gray",
    fontSize: wp(4),
  },
  subTitle: {
    fontSize: wp(4),
    color: "blue",
  },
  card: {
    alignItems: "center",
  },
  cardImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(5),
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: wp(3),
    paddingVertical: 5,
  },
});
