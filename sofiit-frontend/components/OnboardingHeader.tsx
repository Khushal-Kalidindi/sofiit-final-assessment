import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemedText } from "./text/ThemedText";

interface OnboardingHeaderProps {
  currentStage: number;
}

const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  currentStage,
}) => {
  return (
    <View style={styles.headerContainer}>
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
