import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { ThemedText } from "./text/ThemedText";
import { useSegments } from "expo-router";

interface OnboardingHeaderProps {
  style?: ViewStyle;
}

const determineStageFromRoute = (route_segment?: string) => {
  // Get the current route
  if (!route_segment) {
    console.log("Error: No route segment provided");
    return 0; // Initial stage or fallback
  }
  // Map routes to stages or stages to screen names
  switch (route_segment) {
    case "stage1":
      return 1;
    case "stage2":
      return 2;
    case "stage3":
      return 3;
    default:
      return 0; // Initial stage or fallback
  }
};

const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  style = undefined,
}) => {
  return (
    console.log(useSegments()[1]),
    (
      <View style={[styles.headerContainer, style]}>
        <ThemedText color="purple" weight="bold">
          Stage {determineStageFromRoute(useSegments()[1])}
        </ThemedText>
      </View>
    )
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
