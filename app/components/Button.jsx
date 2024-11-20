import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "../components/Icon"; // Adjust the path if needed
import { resp } from "../utils/responsive";
import { colors } from "../config/colors";

const Button = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} isFeather />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    paddingHorizontal: resp(20),
    width: resp(145),
    paddingVertical: resp(14),
    backgroundColor: colors.tertiary,
    borderRadius: resp(12),
    gap: resp(10),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.foreground,
    fontSize: resp(16),
    fontWeight: "700",
    letterSpacing: resp(0.7),
  },
});

export default Button;
