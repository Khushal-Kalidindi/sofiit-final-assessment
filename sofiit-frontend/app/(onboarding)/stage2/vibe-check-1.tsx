import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import { Image } from "react-native";
import React from "react";

export default function VibeCheckScreen1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ width: 96, height: 96 }}>
          <Emoji emoji="woman-in-lotus-position-medium-light-skin-tone" />
        </View>
        <View style={{ width: "100%" }}>
          <ThemedText color="purple" weight="header">
            Start your first vibe check and set a workout goal.
          </ThemedText>
          <ThemedText color="dark">
            Track your mental and physical wellbeing by answering two questions
            every two weeks, and logging your workouts.{" "}
          </ThemedText>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => {
            router.push("/stage2/vibe-check-2");
          }}
          buttonType="primary"
          buttonVariant="filled"
        >
          <ThemedText color="light" weight="bold">
            Let's go
          </ThemedText>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonImage: {
    flexShrink: 1,
    width: "100%",
    height: "100%",
  },
  buttonItemContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 24,
    width: "100%",
    gap: 8,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 72,
    gap: 8,
  },
});
