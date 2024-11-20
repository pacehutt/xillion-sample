import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { resp } from "../utils/responsive";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../config/colors";

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          colors.itemPrimaryGradient,
          "#6B36F499",
          colors.itemSecondaryGradient,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBackground}
      />
      <View style={styles.content}>
        {/* Title and Rate Percent */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.ratePercent, { color: colors.success }]}>
            {item.ratePercent}
          </Text>
        </View>

        {/* Buy, Stop Loss, and Target */}
        <View style={styles.detailsRow}>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Buy</Text>
            <Text style={styles.detailValue}>{item.buy}</Text>
          </View>

          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Stop Loss</Text>
            <Text style={styles.detailValue}>{item.stopLoss}</Text>
          </View>

          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>Target</Text>
            <Text style={styles.detailValue}>{item.target}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: resp(12),
    overflow: "hidden",
    height: resp(100),
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    opacity: 1,
    borderRadius: resp(12),
  },
  content: {
    paddingHorizontal: resp(12),
    paddingVertical: resp(10),
    gap: resp(10),
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.foreground,
    fontSize: resp(18),
    letterSpacing: resp(0.4),
  },
  ratePercent: {
    fontSize: resp(18),
    letterSpacing: resp(0.4),
    textAlign: "center",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailBox: {
    gap: resp(4),
    alignItems: "center",
  },
  detailLabel: {
    color: colors.foreground,
    textAlign: "center",
  },
  detailValue: {
    color: colors.foreground,
    textAlign: "center",
    fontWeight: "700",
  },
});
