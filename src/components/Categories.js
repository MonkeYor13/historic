import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleMain}>Categories</Text>
      <TouchableOpacity>
        <Text style={styles.subTitle}>View all</Text>
      </TouchableOpacity>

      <ScrollView>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
