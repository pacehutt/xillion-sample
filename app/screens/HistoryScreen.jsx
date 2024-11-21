import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import { resp } from "../utils/responsive";
import Icon from "../components/Icon";
import { tradeHistory } from "../data/history"; // Import your trade history data
import HistoryItem from "../components/HistoryItem"; // Assuming you already have the component
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const HistoryScreen = ({ navigation }) => {
  const leftSwipe = Gesture.Pan()
    .activeOffsetX([-50, 0])
    .failOffsetY([-5, 5])
    .onEnd(() => {
      console.log("Swiped left!");
      navigation.goBack();
    });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <GestureDetector gesture={leftSwipe}>
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
            <Icon
              name="arrowleft"
              size={resp(40)}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerText}>Trade History</Text>
          </View>

          {/* Description */}
          <Text style={styles.description}>
            Your ongoing and completed trades are being displayed here.
          </Text>

          {/* FlatList Rendering */}
          <FlatList
            data={tradeHistory}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <HistoryItem item={item} />}
            contentContainerStyle={{ padding: resp(12) }}
          />
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: resp(12),
    gap: resp(10),
  },
  headerText: {
    color: colors.foreground,
    fontSize: resp(24),
    fontWeight: "500",
  },
  description: {
    color: colors.foreground,
    fontSize: resp(13),
    paddingHorizontal: resp(12),
    textAlign: "center",
    marginVertical: resp(10),
  },
  listContainer: {
    paddingHorizontal: resp(12),
    gap: resp(10), // Gap between items
  },
});
