import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function DestinationScreen(props) {
  const item = props.route.params;
  console.log(item);
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={item.image} styles={styles.Image} resize="cover" />
      {/* <StatusBar style="light"/> */}

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
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Image: {
    width: wp(100),
    height: hp(55),
  },
  navigationIcons: {
    position: "absolute",
    top: 60,
    width: wp(100),
    // backgroundColor: "red",
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
});
