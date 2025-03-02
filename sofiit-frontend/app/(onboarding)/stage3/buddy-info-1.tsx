import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/text/ThemedText";
import Emoji from "@/components/Emoji";
import React from "react";
import { useState } from "react";
import IconButton from "@/components/inputs/buttons/IconButton";
import Button from "@/components/inputs/buttons/Button";

export default function BuddyInfo1() {
  const router = useRouter();
  return (
    <>
      <View style={{ paddingHorizontal: 24 }}>
        <ThemedText color="purple" weight="header">
          You're almost in.
        </ThemedText>
        <View style={{ alignItems: "center", marginTop: 16 }}>
          <ThemedText color="dark" weight="regular">
            Complete your profile to meet people on campus with similar
            interests and goals. You'll get your first match today.
          </ThemedText>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => {
            router.push("/stage3/buddy-info-2");
          }}
          buttonType="primary"
          buttonVariant="filled"
        >
          <ThemedText color="light" weight="bold">
            Let's go
          </ThemedText>
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    position: "absolute",
    bottom: 24,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 72,
    gap: 8,
  },
});
