import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import Button from "./Button";
import { ChevronRightWhite } from "@/constants/Images";

export type ButtonStatus = "active" | "disabled";

interface IconButtonProps {
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress: () => void;
}

const IconButton = ({
  onPress,
  disabled = false,
  //   iconSource,
  style,
}: IconButtonProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      buttonStyle={[
        styles.iconButton,
        disabled ? { backgroundColor: "#CDCDCD" } : undefined,
        style,
      ]}
    >
      <View style={styles.iconContainer}>
        <ChevronRightWhite style={styles.iconImage} />
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    paddingVertical: 0,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
  },
  iconImage: {
    // resizeMode: "contain",
  },
});

export default IconButton;
