import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function DestinationScreen(props) {
  const item = props.route.params;
  console.log(item); //ver los datos que trae en la connsola
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />

      {/* Back View */}
      <SafeAreaView
        style={styles.navigationIcons}
        contentContainerStyle={{ marginTop: 40 }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backView}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Favourite icon */}
        <TouchableOpacity
          onPress={() => toggleFavourite(!toggleFavourite)}
          style={styles.favouriteIcon}
        >
          <AntDesign name="heart" size={24} color="red" />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Title*/}
      <ScrollView 
        style={styles.descriptionView}
        contentContainerStyle={{ gap: 20 }}
      >
        <View style={styles.titleView}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <Text style={styles.description}>{item.longDescription}</Text>

        <View style={styles.detailsView}>
          <View style={styles.durationView}>
            <AntDesign name="clockcircle" size={24} color="black" />
            <View style={styles.titleDetails}>
              <Text style={styles.detailsHeading}>{item.duration}</Text>
              <Text style={styles.detailsParagraph}>Duration</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: wp(100),
    height: hp(55),
  },
  navigationIcons: {
    position: "absolute",
    top: 60,
    width: wp(100),
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  backView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
    marginLeft: 10,
  },
  favouriteIcon: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
    marginRight: 16,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: wp(10),
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: wp(4),
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  detailsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
  },
  durationView: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleDetails: {
    paddingTop: 4,
    alignItems: "center",
    gap: 4,
  },
  detailsHeading: {
    fontSize: wp(5),
    fontWeight: "bold",
  },
  detailsParagraph: {
    letterSpacing: 0.5,
    color: "#A0A0A0",
  },
  descriptionView: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 32,
    marginTop: -56,
    
  }
});
