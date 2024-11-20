import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SwipeButton from "rn-swipe-button";
import { resp } from "../utils/responsive";
import thunder from "../assets/icons/thunder.png";

const ThumbIconComponent = () => {
  return (
    <View style={styles.thumbIconContainer}>
      <Image source={thunder} style={styles.thumbIconImage} />
    </View>
  );
};

const CustomSwipeButton = () => {
  const updateSwipeStatusMessage = (message) => {
    console.log(message);
  };

  return (
    <View style={styles.container}>
      <SwipeButton
        containerStyles={styles.swipeButtonContainer}
        railBackgroundColor="#8c8c8c" // Light grey rail for a cleaner look
        railStyles={styles.railStyles}
        thumbIconBackgroundColor="#fff" // White thumb icon
        thumbIconWidth={resp(50)} // Adjust width of thumb icon
        thumbIconStyles={styles.thumbIconStyles}
        thumbIconImageSource={thunder}
        thumbIconBorderColor="#8c8c8c"
        thumbIconComponent={ThumbIconComponent}
        title="EXECUTE" // Title in the button
        titleColor="#333" // Title color
        titleStyles={styles.titleStyles}
        height={resp(50)} // Button height
        onSwipeFail={() => updateSwipeStatusMessage("Swipe failed! Try again.")}
        onSwipeStart={() => updateSwipeStatusMessage("Swipe started!")}
        onSwipeSuccess={() => updateSwipeStatusMessage("Swipe successful!")}
        width={resp(300)} // Button width
      />
    </View>
  );
};

export default CustomSwipeButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: resp(40),
    justifyContent: "center",
    alignItems: "center",
  },
  swipeButtonContainer: {
    borderRadius: resp(40),
    height: resp(50),
    backgroundColor: "transparent",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
  },
  railStyles: {
    borderRadius: resp(25),
  },
  thumbIconContainer: {
    width: resp(50),
    height: resp(50),
    borderRadius: resp(25),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbIconImage: {
    width: resp(25),
    height: resp(25),
  },
  thumbIconStyles: {
    borderRadius: resp(25),
  },
  titleStyles: {
    fontWeight: "600",
  },
});
