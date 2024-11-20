import { StatusBar, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../config/colors";
import { resp } from "../utils/responsive";
import Icon from "../components/Icon";
import { tradeHistory } from "../data/history"; // Import your trade history data
import HistoryItem from "../components/HistoryItem"; // Assuming you already have the component

const HistoryScreen = ({ navigation }) => {
  useEffect(() => {
    StatusBar.setBackgroundColor(colors.background);

    return () => {
      StatusBar.setBackgroundColor(colors.primaryGradient);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={colors.background} />
      {/* Header Section */}
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          size={resp(40)}
          onPress={() => navigation.goBack()} // If navigation exists
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
