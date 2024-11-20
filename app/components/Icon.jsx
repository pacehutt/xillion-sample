import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  onPress,
  isFeather = false,
}) => {
  return !isFeather ? (
    <AntDesign
      name={name}
      color={iconColor}
      size={size * 0.5}
      onPress={onPress}
    />
  ) : (
    <Feather
      name={name}
      color={iconColor}
      size={size * 0.5}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({});

export default Icon;
