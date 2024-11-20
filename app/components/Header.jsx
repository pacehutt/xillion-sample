import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import { resp } from "../utils/responsive";
import { colors } from "../config/colors";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: resp(15),
      }}
    >
      <Icon name={"user"} size={50} />
      <Text
        style={{
          fontSize: resp(22),
          fontWeight: "500",
          letterSpacing: resp(1.3),
          color: colors.foreground,
        }}
      >
        XILLION
      </Text>
      <View>
        <Icon name={"bells"} size={50} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
