import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { ThemedText } from "./text/ThemedText";

interface OnboardingHeaderProps {
  currentStage: number;
  style?: ViewStyle;
}

const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  currentStage,
  style = undefined,
}) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <ThemedText color="purple" weight="bold">
        Stage {currentStage}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
export default OnboardingHeader;
