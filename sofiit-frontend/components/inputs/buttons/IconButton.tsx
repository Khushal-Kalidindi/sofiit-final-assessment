import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import Button from "./Button";
import { Image } from "react-native";
import { Asset } from "expo-asset";
import IMAGES from "@/constants/Images";
import ChevronIcon from "../../../assets/images/chevron.backward.svg";

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

  useEffect(() => {
    async function loadAssets() {
      await Asset.loadAsync([require("../../../assets/images/react-logo.png")]);
      setLoaded(true);
    }
    loadAssets();
  }, []);
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
        <ChevronIcon style={styles.iconImage} />
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
