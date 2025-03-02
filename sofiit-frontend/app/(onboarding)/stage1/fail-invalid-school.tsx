import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import Button from "@/components/inputs/buttons/Button";
import React from "react";

export default function FailInvalidSchool() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ width: 96, height: 96 }}>
          <Emoji emoji="crying-face" />
        </View>
        <ThemedText
          color="purple"
          weight="header"
          style={{ textAlign: "center" }}
        >
          Please use your{" "}
          <ThemedText color="red" weight="header">
            school email
          </ThemedText>{" "}
          to verify
        </ThemedText>
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => {}} buttonType="primary" buttonVariant="filled">
          <ThemedText color="light" weight="bold">
            I want to help launch
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
