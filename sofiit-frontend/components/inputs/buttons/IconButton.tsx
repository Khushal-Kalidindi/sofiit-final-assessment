import React from "react";
import { StyleSheet, View } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import Button from "./Button";
import { Image } from "react-native";

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
        <Image
          source={require("../../../assets/images/chevron.backward.svg")}
          style={styles.iconImage}
        />
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
    resizeMode: "contain",
  },
});

export default IconButton;
