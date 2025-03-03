import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import React from "react";

export default function FailInvalidSchool() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <View style={{ width: 96, height: 96 }}>
        <Emoji emoji="rocket" />
      </View>
      <ThemedText
        color="purple"
        weight="header"
        style={{ textAlign: "center" }}
      >
        Buddy match in progress
      </ThemedText>
      <ThemedText color="grey" style={{ marginTop: 24, textAlign: "center" }}>
        Expect a buddy in <strong>24 hours</strong> and new matches every
        Wednesday.
      </ThemedText>
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
    paddingTop: 160,
    alignItems: "center",
    paddingHorizontal: 16,
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
