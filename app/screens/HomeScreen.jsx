import { FlatList, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { colors } from "../config/colors";
import Header from "../components/Header";
import Icon from "../components/Icon";
import { resp } from "../utils/responsive";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import { assetData } from "../data/assets";
import SwipeButton from "../components/CustomSwipeButton";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primaryGradient,
      }}
    >
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={[colors.primaryGradient, colors.secondaryGradient]}
          style={styles.background}
        />
        <Header />
        <View style={styles.centeredContainer}>
          <View style={styles.portfolioContainer}>
            <Text style={styles.portfolioTitle}>Current Portfolio</Text>
            <View style={styles.portfolioValueContainer}>
              <Text style={styles.portfolioValue}>₹ 12,38,364</Text>
              <Icon name={"refresh-cw"} isFeather />
            </View>
          </View>

          <View style={styles.unusedFundsContainer}>
            <Text style={styles.unusedFundsTitle}>Unused Funds</Text>
            <Text style={styles.unusedFundsValue}>₹ 1,18,261</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button iconName="download" text="Portfolio" onPress={() => {}} />
          <Button iconName="message-square" text="Ask AI" onPress={() => {}} />
        </View>

        <View style={styles.assetsContainer}>
          <Text style={styles.assetsTitle}>Today's Recommendations</Text>
          <View style={styles.assetsListContainer}>
            <FlatList
              data={assetData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <ListItem item={item} />}
              contentContainerStyle={styles.assetsListContent}
            />
          </View>
        </View>
        <SwipeButton />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    width: "100%",
    height: resp(250),
    gap: resp(10),
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: resp(250),
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: resp(12),
  },
  portfolioContainer: {},
  portfolioTitle: {
    textAlign: "center",
    color: colors.foreground,
    fontSize: resp(16),
  },
  portfolioValueContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: resp(10),
  },
  portfolioValue: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: resp(36),
    color: colors.foreground,
  },
  unusedFundsContainer: {
    gap: resp(6),
  },
  unusedFundsTitle: {
    textAlign: "center",
    color: colors.foreground,
    fontSize: resp(16),
  },
  unusedFundsValue: {
    textAlign: "center",
    color: colors.foreground,
    fontWeight: "700",
    fontSize: resp(18),
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: resp(12),
    transform: [{ translateY: resp(14) }],
  },
  assetsContainer: {
    paddingTop: resp(20),
  },
  assetsTitle: {
    color: colors.foreground,
    fontSize: resp(18),
    fontWeight: "500", // Use string value for fontWeight
    letterSpacing: resp(0.5),
    textAlign: "center",
  },
  assetsListContainer: {
    paddingVertical: resp(20),
    paddingHorizontal: resp(12),
    height: 3 * resp(100) + 2 * resp(12) + 2 * resp(20) + resp(16), // Dynamically calculated height
  },
  assetsListContent: {
    gap: resp(12), // Gap between items in the FlatList
  },
});
