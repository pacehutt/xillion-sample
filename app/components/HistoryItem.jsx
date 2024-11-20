import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { resp } from "../utils/responsive";
import { colors } from "../config/colors";
import IncrementIcon from "../assets/icons/IncrementIcon";
import Chip from "./Chip"; // Separate Chip Component

const HistoryItem = ({ item }) => {
  const isProfit = item.profitLoss.startsWith("+"); // Determine if profit or loss
  const isOngoing = item.status.toLowerCase() === "ongoing";

  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.nameAndChange}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.changeContainer}>
            <Text
              style={[
                styles.changePercent,
                isProfit ? styles.success : styles.danger,
              ]}
            >
              {item.changePercent}
            </Text>
            <View
              style={{
                transform: [{ rotate: isProfit ? "0deg" : "180deg" }],
              }}
            >
              <IncrementIcon
                color={isProfit ? colors.success : colors.danger}
              />
            </View>
          </View>
        </View>

        <Chip text={item.status} isOngoing={isOngoing} />
      </View>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>Qty {item.quantity}</Text>
          <Text style={styles.detailsText}>
            Buy Price ₹ {item.buyPrice.toFixed(2)}
          </Text>
          <Text style={styles.detailsText}>
            Invested ₹ {item.invested.toFixed(2)}
          </Text>
        </View>

        {/* Profit or Loss */}
        <Text
          style={[styles.profitLoss, isProfit ? styles.success : styles.danger]}
        >
          {item.profitLoss}
        </Text>
      </View>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    padding: resp(12),
    marginVertical: resp(8),
    borderRadius: resp(12),
    gap: resp(16),
    backgroundColor: colors.secondaryGradient + "20", // 20% opacity
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameAndChange: {
    flexDirection: "row",
    gap: resp(12),
    alignItems: "center",
  },
  name: {
    fontSize: resp(18),
    color: colors.foreground,
    fontWeight: "500",
  },
  changeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: resp(4),
  },
  changePercent: {
    fontSize: resp(14),
    fontWeight: "500",
  },
  success: {
    color: colors.success,
  },
  danger: {
    color: colors.danger,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsContainer: {
    gap: resp(5),
  },
  detailsText: {
    fontSize: resp(12),
    color: colors.secondaryText,
  },
  profitLoss: {
    fontSize: resp(18),
    fontWeight: "600",
  },
});
