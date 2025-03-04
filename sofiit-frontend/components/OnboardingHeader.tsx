import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { ThemedText } from "./text/ThemedText";
import { useRouter, useSegments } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ChevronLeft } from "@/constants/Images";

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
  const stage = determineStageFromRoute(useSegments()[1]);
  const router = useRouter();

  return (
    // console.log(useSegments()[1]),
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ChevronLeft />
      </TouchableOpacity>
      <View style={[styles.headerContainer, style]}>
        <View style={styles.progressContainer}>
          <LinearGradient
            style={styles.progressDot}
            colors={
              stage >= 1 ? ["#7F4C76", "#66295B"] : ["#E2E2E2", "#E2E2E2"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
          <LinearGradient
            style={styles.progressDot}
            colors={
              stage >= 2 ? ["#652459", "#57144B"] : ["#E2E2E2", "#E2E2E2"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
          <LinearGradient
            style={styles.progressDot}
            colors={
              stage >= 3 ? ["#531247", "#3F0835"] : ["#E2E2E2", "#E2E2E2"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 99,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  progressContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 8,
  },
  progressDot: {
    width: 60,
    height: 8,
    borderRadius: 4,
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 25,
  },
});
export default OnboardingHeader;
