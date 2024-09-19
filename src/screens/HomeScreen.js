import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";
import Categories from "../components/Categories";
import SubCategories from "../components/SubCategories";
import Destinations from "../components/Destinations";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 50,
        }}
      >
        {/* avatar */}
        <View style={styles.avatarMain}>
          <Text style={styles.avatarTitle}>Explore Place</Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
        </View>
        {/* seachBar */}
        <View style={styles.searchBar}>
          <View style={styles.searchBarMain}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={"gray"}
              style={styles.searchBarTextInput}
            />
          </View>
        </View>
        {/* categories */}
        <View style={styles.categories}>
          <Categories />
        </View>
        {/* Sub-categories */}
        <View style={styles.subCategories}>
          <SubCategories />
        </View>
        {/* Destinations */}
        <View style={styles.destinations}>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  avatarMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  avatarTitle: {
    fontSize: wp(7),
    fontWeight: "bold",
    color: "#000",
  },
  avatarImage: {
    height: 48,
    width: 48,
  },
  searchBar: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  searchBarMain: {
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    padding: 16,
    paddingLeft: 24,
    gap: 5,
  },
  searchBarTextInput: {
    fontSize: wp(4),
    marginBottom: 4,
    paddingLeft: 4,
    letterSpacing: 0.5,
  },
});
